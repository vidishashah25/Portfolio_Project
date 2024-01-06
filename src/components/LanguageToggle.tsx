import React from "react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="de">German</option>
    </select>
  );
}
