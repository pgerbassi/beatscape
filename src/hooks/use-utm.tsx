import { useEffect, useState } from "react";

export function useUTMParams ()  {
    const [utmParams, setUtmParams] = useState(() => {
      // Try to get UTM params from localStorage on initial load
      const storedParams = JSON.parse(localStorage.getItem("utmParams"));
      return storedParams || {};
    });
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_term: urlParams.get("utm_term") || "",
        utm_content: urlParams.get("utm_content") || "",
      };
  
      // Store the UTM params in localStorage
      localStorage.setItem("utmParams", JSON.stringify(utmData));
      setUtmParams(utmData);
    }, []);
  
    return utmParams;
};