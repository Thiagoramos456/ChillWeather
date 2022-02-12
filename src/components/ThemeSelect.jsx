export default function ThemeSelect() {
  return(<div>
<select
onChange={({target:{value}}) => {
    console.log(value)
}}
>
    <option>Dark Mode</option>
    <option>Light Mode</option>
</select>
  </div>
  );
}
