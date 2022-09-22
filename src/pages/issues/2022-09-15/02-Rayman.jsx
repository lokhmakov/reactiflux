export default function Page() { return null }

const originalExtras = [
  {
      "id": 2,
      "title": "initial test",
      "summary": "this is a basic test",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "author": "Mike dandy",
      "generatedDate": "2022-09-11",
      "video": "https://www.youtube.com/embed/AiTG6T9pTcM",
      "hidden": false,
      "views": 28,
      "moduleCode": null
  },
  {
      "id": 19,
      "title": "extra module test",
      "summary": "insert extra with module",
      "content": "this is a test to insert modules from extra",
      "author": "thomas storey",
      "generatedDate": "2022-01-01",
      "video": "",
      "hidden": false,
      "views": 0,
      "moduleCode": "SWE5103"
  },
  {
    "id": 20,
    "title": "extra module test1",
    "summary": "insert extra with module",
    "content": "this is a test to insert modules from extra",
    "author": "thomas storey",
    "generatedDate": "2022-01-01",
    "video": "",
    "hidden": false,
    "views": 0,
    "moduleCode": "SWE5103"
}  
]

const searchModules = [
  {moduleCode: "SW5105",},
  {moduleCode: "SWE1001",},
  {moduleCode: "SWE5103", title: "extra module test"},
]

const filterFn = (a) => searchModules.some(b => a.moduleCode === b.moduleCode && a.title == b.title)

console.log(originalExtras.filter(filterFn))