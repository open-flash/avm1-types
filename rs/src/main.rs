use avm1_types::Action;
use std::io::Read;

fn main() {
  let mut buf: Vec<u8> = Vec::new();

  match ::std::io::stdin().read_to_end(&mut buf) {
    Err(_) => println!("Cannot read stding"),
    Ok(_) => {
      let actions: Vec<Action> = serde_json::from_slice(&buf).unwrap();
      println!("{}", serde_json::to_string_pretty(&actions).unwrap());
    }
  }
}
