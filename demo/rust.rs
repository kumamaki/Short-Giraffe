#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use cocoa::appkit::{NSToolbar, NSWindow, NSWindowStyleMask, NSWindowTitleVisibility};
use tauri::{
  AppHandle, CustomMenuItem, Manager, Runtime, SystemTray, SystemTrayEvent, SystemTrayMenu,
  SystemTrayMenuItem, Window, WindowBuilder, WindowUrl,
};
use window_shadows::set_shadow;
use window_vibrancy::{apply_mica, apply_vibrancy, NSVisualEffectMaterial};

pub trait WindowExt {
  #[cfg(target_os = "macos")]
  fn set_custom_titlebar(&self);
  fn set_normal_titlebar(&self);
  fn set_transparent_titlebar(&self, transparent: bool);
}

impl<R: Runtime> WindowExt for Window<R> {
  #[cfg(target_os = "macos")]
  fn set_custom_titlebar(&self) {
      unsafe {
          let id = self.ns_window().unwrap() as cocoa::base::id;
          self.set_title("").expect("Title wasn't set to ''");
          make_custom_toolbar(id);
      }
  }
  fn set_normal_titlebar(&self) {
      unsafe {
          let id = self.ns_window().unwrap() as cocoa::base::id;
          make_normal_toolbar(id);
      }
  }
  #[cfg(target_os = "macos")]
  fn set_transparent_titlebar(&self, transparent: bool) {
      unsafe {
          let id = self.ns_window().unwrap() as cocoa::base::id;

          let mut style_mask = id.styleMask();
          style_mask.set(
              NSWindowStyleMask::NSFullSizeContentViewWindowMask,
              transparent,
          );
          id.setStyleMask_(style_mask);

          id.setTitleVisibility_(if transparent {
              NSWindowTitleVisibility::NSWindowTitleHidden
          } else {
              NSWindowTitleVisibility::NSWindowTitleVisible
          });
          id.setTitlebarAppearsTransparent_(if transparent {
              cocoa::base::YES
          } else {
              cocoa::base::NO
          });
      }
  }
}

#[cfg(target_os = "macos")]
unsafe fn make_custom_toolbar(id: cocoa::base::id) {
  id.setTitleVisibility_(NSWindowTitleVisibility::NSWindowTitleHidden);
  id.setTitlebarAppearsTransparent_(cocoa::base::YES);
  let new_toolbar = NSToolbar::alloc(id);
  new_toolbar.init_();
  id.setToolbar_(new_toolbar);
}

#[cfg(target_os = "macos")]
unsafe fn make_normal_toolbar(id: cocoa::base::id) {
  let new_toolbar = NSToolbar::init_(id);
  new_toolbar.init_();
  id.setToolbar_(new_toolbar);
}

#[allow(dead_code)]
#[tauri::command]
async fn show_window(window: tauri::Window, label: String) {
  let new_window = window.get_window(label.as_str()).unwrap();
  new_window.show().unwrap();
  new_window.set_always_on_top(true).unwrap();
}

fn main() {
  tauri::Builder::default()
      .setup(|app| {
          let window = app.get_window("main").unwrap();

          #[cfg(target_os = "macos")]
          apply_vibrancy(&window, NSVisualEffectMaterial::HudWindow, None, Some(10.0))
              .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

          #[cfg(target_os = "windows")]
          apply_mica(&window, Some((18, 18, 18, 125)))
              .expect("Unsupported platform! 'apply_blur' is only supported on Windows");

          set_shadow(&window, true).expect("Unsupported platform!");
          window.set_transparent_titlebar(true);

          Ok(())
      })
      .invoke_handler(tauri::generate_handler![show_window])
      .run(tauri::generate_context!())
      .expect("error while building tauri application");
}
