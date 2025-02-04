import CheckboxInput from "./components/input/CheckboxInput";
import TextInput from "./components/input/TextInput";
import Button from "./components/button/Button"

export default function Home() {
  return (
    <>
      <CheckboxInput text='1st todo'/>
      <CheckboxInput text='2nd todo'/>
      <CheckboxInput text='3rd todo'/>
      <CheckboxInput text='4th todo'/>  

      <TextInput />
      <Button>Click me</Button>
    </>
  )
}
