use avm1_types::Action;
use std::io::Read;

fn main() {
  let mut buf: Vec<u8> = Vec::new();

  match ::std::io::stdin().read_to_end(&mut buf) {
    Err(_) => println!("Cannot read stding"),
    Ok(_) => {
      let actions: Vec<Action> = serde_json_v8::from_slice(&buf).unwrap();
      println!("{}", serde_json_v8::to_string_pretty(&actions).unwrap());
    }
  }
}
