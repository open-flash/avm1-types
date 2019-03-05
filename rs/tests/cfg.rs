use avm1_tree;

mod cfg {
  pub mod try_catch_err;
}

#[test]
fn try_catch_err() {
  let file = ::std::fs::File::open("../tests/cfg/try-catch-err.json").unwrap();
  let reader = ::std::io::BufReader::new(file);
  // Check that we can parse the test case without issues
  let actual: avm1_tree::Cfg = serde_json::from_reader(reader).unwrap();
  let expected: avm1_tree::Cfg = cfg::try_catch_err::get();

  assert_eq!(actual, expected);
}
