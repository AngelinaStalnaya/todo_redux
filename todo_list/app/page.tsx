import CheckboxInput from "./components/input/CheckboxInput";
import TextInput from "./components/input/TextInput";
import Button from "./components/button/Button"
import CheckboxInputList from "./components/input/CheckboxInputList";

const todos = [
  {
    id: '34',
    text: 'ergrtgrth'
  },
  {
    id: '345',
    text: '56467'
  },
  {
    id: '97',
    text: '856456ghnbtrge'
  }
]

export default function Home() {
  return (
    <>
      <CheckboxInput text='1st todo' />
      {/* <CheckboxInput text='2nd todo'/>
      <CheckboxInput text='3rd todo'/>
      <CheckboxInput text='4th todo'/>   */}

      <TextInput />
      <Button>Click me</Button>

      <CheckboxInputList todos={todos} />
    </>
  )
}
