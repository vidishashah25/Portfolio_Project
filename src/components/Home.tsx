import { useTranslation } from "react-i18next";

function Home() {

    const { t } = useTranslation();

    console.log(t("greeting"))

  return (
    <div>
      <h1>{t("greeting.title")}</h1>
      <p>{t("greeting.message")}</p>
    </div>
  )
}

export default Home
