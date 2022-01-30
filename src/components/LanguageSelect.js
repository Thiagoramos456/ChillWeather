import languages from "../services/languages";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function LanguageSelect() {
  const { setLanguage } = useContext(AppContext);
  return (
    <>
      <select
        onChange={({ target: { value } }) => setLanguage(value)}
        defaultValue=''
        name="language"
        id="language"
      >
        {languages.map((r) => (
          <option value={r.lang_code}>{r.language}</option>
        ))}
      </select>
    </>
  );
}
