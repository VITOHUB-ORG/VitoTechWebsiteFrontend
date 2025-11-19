// src/components/RDGoogleMap.tsx
import { useEffect, useRef } from "react";

type LatLng = {
  lat: number;
  lng: number;
};

// Koordinates za Iyumbu, Dodoma
const MAP_CENTER: LatLng = { lat: -6.163, lng: 35.7516 };

// Soma API key kutoka .env (Vite: VITE_GOOGLE_MAPS_API_KEY=...)
const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "YOUR_GOOGLE_MAPS_API_KEY_HERE";

// Minimal typings za Google Maps ili tusitumie `any`
interface GoogleMapLike {
  // tunahitaji tu constructor
  new (
    mapDiv: HTMLElement,
    opts: {
      center: LatLng;
      zoom: number;
      disableDefaultUI?: boolean;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
    }
  ): unknown;
}

interface GoogleMarkerLike {
  new (opts: { position: LatLng; map: unknown; title?: string }): {
    addListener: (eventName: string, handler: () => void) => void;
  };
}

interface GoogleInfoWindowLike {
  new (opts: { content: string }): {
    open: (map: unknown, marker: unknown) => void;
  };
}

interface GoogleMapsGlobal {
  maps: {
    Map: GoogleMapLike;
    Marker: GoogleMarkerLike;
    InfoWindow: GoogleInfoWindowLike;
  };
}

// Hii ina-exist mara tu script ya Google Maps ikishaload
declare const google: GoogleMapsGlobal;

export default function RDGoogleMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const container = mapRef.current;

    function initMap() {
      // Hakikisha global `google` ipo
      if (typeof google === "undefined" || !container) return;

      const map = new google.maps.Map(container, {
        center: MAP_CENTER,
        zoom: 14,
        disableDefaultUI: false,
        mapTypeControl: false,
        streetViewControl: false,
      });

      const marker = new google.maps.Marker({
        position: MAP_CENTER,
        map,
        title: "VitoTech Office, Iyumbu, Dodoma, Tanzania",
      });

      const infoWindow = new google.maps.InfoWindow({
        content:
          '<div style="font-size:14px;line-height:1.4;"><strong>VitoTech Office</strong><br>Iyumbu, Dodoma, Tanzania</div>',
      });

      infoWindow.open(map, marker);

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    }

    // Cheki kama script ya Google Maps tayari ipo
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-google-maps="true"]'
    );

    if (existingScript) {
      if (typeof google !== "undefined") {
        initMap();
      } else {
        existingScript.addEventListener("load", initMap);
      }

      return () => {
        existingScript.removeEventListener("load", initMap);
      };
    }

    // Vinginevyo, ongeza script mpya
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.addEventListener("load", initMap);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", initMap);
    };
  }, []);

  return (
    <section className="section section-fluid">
      <section className="section">
        {/* sawa na mfano wako: height ~ 500px, full width */}
        <div ref={mapRef} className="h-[500px] w-full" />
      </section>
    </section>
  );
}
