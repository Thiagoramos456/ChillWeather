import languages from "../services/languages";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { KEY, searchAPI } from "../API";

export default function LanguageSelect() {
  const { setLanguage, city, setWeatherData } = useContext(AppContext);
  return (
    <>
      <select
        onChange={({ target: { value } }) => {
          searchAPI(KEY, city, value).then((r) => setWeatherData(r));
          setLanguage(value);
        }}
        defaultValue=""
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
