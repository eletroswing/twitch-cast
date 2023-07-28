import { createRef, useEffect, useState } from "react";
import Hls from "hls.js";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  const audio = createRef<HTMLAudioElement>();
  const player = createRef<HTMLDivElement>();
  const input = createRef<HTMLInputElement>();
  const [channel, setChannel] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      input.current?.focus();
    }
  }, [input]);

  var hls: any;

  function Play(url: string) {
    if (hls) {
      hls.destroy();
    }
    const audioEl = audio.current;
    if (!audioEl) return;
    if (audioEl.canPlayType("application/vnd.apple.mpegurl")) {
      // This will run in safari, where HLS is supported natively
      audioEl.src = url;
      audioEl.addEventListener("canplay", function () {
        let element: any = document.getElementById("audio");
        element?.play();
      });
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(audioEl);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        let element: any = document.getElementById("audio");
        element?.play();
      });
    } else {
      setChannel(null);
      console.error(
        "This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API"
      );
    }
  }

  function LoadAndPlay(name: string) {
    fetch(`/api/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setChannel(res);
        Play(res.data.url);
      })
      .catch((e) => {
        setChannel(null);
        alert("Este canal não existe ou não está em live no momento.");
      });
  }

  function onFormSubmit(event: any) {
    event.preventDefault();
    LoadAndPlay(input.current?.value || "");
    input.current!.value = "";
    input.current?.focus();
  }

  return (
    <>
      <Head>
        <title>Twitch Cast: Escute suas lives da twitch em podcast!</title>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta
          name="title"
          content="Twitch Cast: Escute suas lives da twitch em podcast!"
        />
        <meta
          name="description"
          content="Com Twitch Cast você economiza sua largura de banda transformando a live dos seus streamers favoritos em um podcast!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twitch-cast.vercel.app" />
        <meta
          property="og:title"
          content="Twitch Cast: Escute suas lives da twitch em podcast!"
        />
        <meta
          property="og:description"
          content="Com Twitch Cast você economiza sua largura de banda transformando a live dos seus streamers favoritos em um podcast!"
        />
        <meta
          property="og:image"
          content="https://twitch-cast.vercel.app/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://twitch-cast.vercel.app" />
        <meta
          property="twitter:title"
          content="Twitch Cast: Escute suas lives da twitch em podcast!"
        />
        <meta
          property="twitter:description"
          content="Com Twitch Cast você economiza sua largura de banda transformando a live dos seus streamers favoritos em um podcast!"
        />
        <meta
          property="twitter:image"
          content="https://twitch-cast.vercel.app/logo.png"
        />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W71YYM5CPV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W71YYM5CPV');
        `}
      </Script>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "3rem",
        }}
      >
        <div className="logo-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 99 39"
          >
            <defs>
              <clipPath id="b">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="c">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="d">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="e">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="f">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="g">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="h">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="i">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="j">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="k">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="l">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="m">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="n">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="o">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="p">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="q">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="r">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="s">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="t">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="u">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="v">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="w">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="x">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="y">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="z">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="A">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="B">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="C">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="D">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="E">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="F">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="G">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="H">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="I">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="J">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="K">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="L">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="M">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="N">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="O">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="P">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="Q">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="R">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="S">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="T">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="U">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="V">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="W">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="X">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="Y">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="Z">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aa">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ab">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ac">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ad">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ae">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="af">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ag">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ah">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ai">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aj">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ak">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="al">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="am">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="an">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ao">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ap">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aq">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ar">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="as">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="at">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="au">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="av">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aw">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ax">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ay">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="az">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aA">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aB">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aC">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aD">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aE">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aF">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aG">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aH">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aI">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aJ">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aK">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aL">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aM">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aN">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aO">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aP">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aQ">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aR">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aS">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aT">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aU">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aV">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aW">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aX">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aY">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="aZ">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="ba">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bb">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bc">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bd">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="be">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bf">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bg">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bh">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <clipPath id="bi">
                <path d="M0 0h99v39H0z" />
              </clipPath>
              <mask id="bk">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.509804,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bm">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.0117647,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bo">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.490196,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bq">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.866667,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bs">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.835294,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bu">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.913725,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bw">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.815686,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="by">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.847059,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bA">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.847059,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bC">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.878431,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bE">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.952941,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bG">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bI">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.819608,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bK">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.854902,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bM">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.823529,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bO">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.905882,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bQ">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.956863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bS">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.854902,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bU">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.823529,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bW">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.00392157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="bY">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.501961,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ca">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.00392157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cc">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.00392157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ce">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.00392157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cg">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.00392157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ci">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.00392157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ck">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.870588,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cm">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.8,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="co">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cq">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cs">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.764706,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cu">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cw">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cy">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cA">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cC">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.780392,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cE">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cG">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cI">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cK">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.843137,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cM">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.843137,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cO">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.843137,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cQ">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.780392,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cS">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.921569,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cU">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.976471,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cW">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.780392,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="cY">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.843137,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="da">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.796078,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dc">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.878431,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="de">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.882353,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dg">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="di">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.752941,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dk">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.882353,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dm">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.792157,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="do">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dq">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ds">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.933333,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="du">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.843137,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dw">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.878431,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dy">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.815686,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dA">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.752941,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dC">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.913725,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dE">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.815686,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dG">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.807843,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dI">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.827451,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dK">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.913725,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dM">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.835294,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dO">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.784314,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dQ">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.92549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dS">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.905882,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dU">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.823529,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dW">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.956863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="dY">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.956863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ea">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.956863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ec">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ee">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eg">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ei">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.823529,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ek">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.823529,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="em">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.803922,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eo">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.803922,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eq">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.917647,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="es">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.788235,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eu">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.964706,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ew">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.819608,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="ey">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.772549,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eA">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.764706,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eC">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.921569,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eE">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.756863,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eG">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.862745,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eI">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.780392,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eK">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.862745,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eM">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.760784,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eO">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.752941,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eQ">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.752941,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eS">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.854902,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eU">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.85098,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eW">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.85098,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="eY">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.482353,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fa">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.964706,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fc">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.964706,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fe">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fg">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fi">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.886275,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fk">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.807843,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fm">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.807843,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fo">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.776471,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fq">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.776471,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fs">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.776471,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fu">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.811765,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fw">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.811765,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <mask id="fy">
                <g filter="url(#a)">
                  <path
                    d="M0 0h99v39H0z"
                    style={{
                      fill: "#000",
                      fillOpacity: 0.454902,
                      stroke: "none",
                    }}
                  />
                </g>
              </mask>
              <g id="bj" clipPath="url(#b)">
                <path
                  d="M26.383 3.969c.12-.024.176.027.168.148h.074c.043.074.082.156.117.242a.09.09 0 0 0 .074.024.11.11 0 0 0 .024.097c.047.047.09.094.133.145-.004.082.03.125.109.121a.15.15 0 0 0 .086.149.205.205 0 0 1 .012.097h.07c-.016.082.016.121.098.121.035.082.07.164.109.242.137.168.273.34.41.508.024.04.04.078.035.121h.075a.205.205 0 0 0 .011.098c.055.07.114.129.184.184-.024.015-.027.039-.016.058.059.059.114.117.172.172-.008.082.031.125.11.133-.012.012-.02.023-.028.035.063.063.117.129.172.195.023.04.031.079.023.121h.07c0 .028.005.051.016.075.055.035.09.082.106.144.02.024.047.031.074.024a.174.174 0 0 0 .024.125c.03.035.066.07.109.093 5.105-.03 10.207-.03 15.312 0a.45.45 0 0 0 .098-.046.291.291 0 0 1-.027-.047v-3.38h.12c.005 1.169 0 2.333-.01 3.5a.18.18 0 0 1-.036.06c-5.172.015-10.344.015-15.516 0a.59.59 0 0 1-.11-.087 6.662 6.662 0 0 0-.46-.628 71.62 71.62 0 0 0-1.883-2.625 1.145 1.145 0 0 1-.11-.22Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#8f41fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bl" clipPath="url(#c)">
                <path
                  d="M44.387 3.969v3.379a30.035 30.035 0 0 1 0-3.38Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9c4bfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bn" clipPath="url(#d)">
                <path
                  d="M73.055 3.969h.093c.004 1.152 0 2.3-.011 3.449.847-.008 1.699 0 2.55.023a87.863 87.863 0 0 0 2.395 2.43.233.233 0 0 1 .023.145.12.12 0 0 1-.074-.012 257.726 257.726 0 0 0-2.293-2.332.796.796 0 0 0-.172-.121c-.828-.004-1.652-.016-2.476-.035a89.408 89.408 0 0 1-.035-3.547Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9142fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bp" clipPath="url(#e)">
                <path
                  d="M72.04 4.965v.027h-3.942v-.027a82.863 82.863 0 0 1 3.941 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c298fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="br" clipPath="url(#f)">
                <path
                  d="M49.465 5.04a.129.129 0 0 0-.074-.024c-1.29-.004-2.578 0-3.868.011-.023.778-.03 1.559-.023 2.344v.07c-.023-.804-.031-1.613-.023-2.425a85.688 85.688 0 0 1 2.003-.024c.672 0 1.333.016 1.985.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e2d0ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bt" clipPath="url(#g)">
                <path
                  d="M49.39 5.016a.057.057 0 0 1-.023.035c-1.281.011-2.562.015-3.844.011.008.774 0 1.543-.023 2.31-.008-.786 0-1.567.023-2.345 1.29-.011 2.579-.015 3.868-.011Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#f7f1ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bv" clipPath="url(#h)">
                <path
                  d="M68.098 4.965V5.016c-.02 4.156-.032 8.316-.035 12.48-.008.016-.02.024-.036.024-.007-4.176 0-8.352.024-12.528a.291.291 0 0 1 .047-.027Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a76cfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bx" clipPath="url(#i)">
                <path
                  d="M25.852 5.016c.023 1.152.03 2.308.023 3.472-.016-1.144-.035-2.289-.05-3.437a310.727 310.727 0 0 0-3.817-.012c-.024-.004-.047.008-.063.024-.02 3.492-.015 6.98.012 10.468.04.063.082.125.121.192h-.047l-.12-.192c-.005-3.5 0-6.996.01-10.492 1.31-.023 2.618-.031 3.93-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#eee1ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bz" clipPath="url(#j)">
                <path
                  d="M54.469 5.016c.023 1.152.031 2.308.023 3.472-.015-1.144-.035-2.289-.05-3.437-1.29-.016-2.579-.016-3.868 0-.023 2.18-.031 4.363-.023 6.543h-.024c-.004-2.184 0-4.371.012-6.555 1.309-.023 2.617-.031 3.93-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#eee1ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bB" clipPath="url(#k)">
                <path
                  d="M68.098 5.016V17.52h3.918c-1.305.015-2.614.035-3.918.05v.024c-.024-.024-.047-.047-.07-.074.015 0 .027-.008.034-.024.004-4.164.016-8.324.036-12.48Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#d2b4fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bD" clipPath="url(#l)">
                <path
                  d="M68.098 4.992h3.941v3.446c-.016-1.133-.031-2.27-.05-3.41-1.286.003-2.571.015-3.852.035-.016 4.144-.02 8.289-.016 12.433h3.895c-.008-1.64 0-3.273.023-4.906v4.93H68.098V4.992Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ede2ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bF" clipPath="url(#m)">
                <path
                  d="M72.04 4.992c.015 0 .026.008.034.024.004 1.144.016 2.285.035 3.421.02 0 .028.008.028.028-.02 0-.028.008-.028.023-.039-1.144-.062-2.297-.07-3.449v-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c49dfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bH" clipPath="url(#n)">
                <path
                  d="M72.04 4.992v-.027a.07.07 0 0 1 .058.027c.011 1.149.015 2.297.011 3.446-.02-1.137-.03-2.278-.035-3.422-.008-.016-.02-.024-.035-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b07afe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bJ" clipPath="url(#o)">
                <path
                  d="M25.969 8.465c-.032-.008-.055 0-.07.023h-.024c.008-1.164 0-2.32-.023-3.472a74.098 74.098 0 0 0-3.954 0c-.02 3.507-.015 7.011.012 10.515l.121.192a2.11 2.11 0 0 1-.156-.121l-.023-.07c-.024-3.516-.02-7.028.011-10.54a.156.156 0 0 1 .07-.039c1.317-.02 2.63-.016 3.942.012.023 1.16.031 2.316.023 3.473.032-.004.055.003.07.027Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bd91fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bL" clipPath="url(#p)">
                <path
                  d="M25.852 5.016c-1.313-.008-2.622 0-3.93.023-.012 3.496-.016 6.992-.012 10.492a786.255 786.255 0 0 1-.012-10.515 74.098 74.098 0 0 1 3.954 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e0ccff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bN" clipPath="url(#q)">
                <path
                  d="M22.008 5.04a.091.091 0 0 1-.04.046c-.011 3.48-.015 6.965-.011 10.445a779.294 779.294 0 0 1-.012-10.469c.016-.015.04-.027.063-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#f8f3ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bP" clipPath="url(#r)">
                <path
                  d="M45.477 4.992v.024c-.008.812 0 1.62.023 2.425 0 .02.008.028.023.028v.023H45.5a.057.057 0 0 1-.035-.023c-.02-.832-.016-1.657.012-2.477Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bf94ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bR" clipPath="url(#s)">
                <path
                  d="M54.586 8.465c-.031-.008-.055 0-.07.023h-.024c.008-1.164 0-2.32-.023-3.472a74.098 74.098 0 0 0-3.953 0c-.012 2.191-.016 4.386-.012 6.578a165.144 165.144 0 0 0-.024 3.937 526.565 526.565 0 0 1 0-10.539.156.156 0 0 1 .07-.039c1.317-.02 2.63-.016 3.942.012.024 1.16.031 2.316.024 3.473.03-.004.054.003.07.027Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bc90fd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bT" clipPath="url(#t)">
                <path
                  d="M54.469 5.016c-1.313-.008-2.621 0-3.93.023a916.63 916.63 0 0 0-.012 6.555h-.023c-.004-2.192 0-4.387.012-6.578a74.098 74.098 0 0 1 3.953 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e0ccfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bV" clipPath="url(#u)">
                <path
                  d="M27.637 5.402c.035.016.035.016 0 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#00f",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bX" clipPath="url(#v)">
                <path
                  d="M55.457 3.969h.145c-.004 1.152 0 2.3.011 3.449 1.145-.004 2.293 0 3.446.012.03.226.046.457.05.691a46.55 46.55 0 0 0-.015.73c.082-.097.172-.187.265-.265a.128.128 0 0 0 .016-.074c.023.004.047 0 .07-.012l.184-.184a.113.113 0 0 0 .012-.07h.093a.122.122 0 0 1 .016-.074c.078-.074.164-.14.25-.195-.008-.07.027-.106.098-.098a.079.079 0 0 1 .023-.07.27.27 0 0 1 .149-.098c-.012-.074.023-.106.093-.098.035-.062.075-.125.121-.183 1.496-.02 2.993-.016 4.485.011a.422.422 0 0 0 .11-.093.174.174 0 0 0 .023-.125h.074a.136.136 0 0 1 .023-.094c.063-.035.086-.078.07-.137.075-.012.118-.054.122-.133.054-.07.109-.14.171-.207l-.027-.023c.07-.016.106-.063.11-.133a.565.565 0 0 0 .144-.144c.008-.036.02-.067.027-.098.055-.059.11-.113.168-.172.012-.031.016-.062.012-.098h.074a.195.195 0 0 1 .012-.093c.055-.059.113-.114.168-.172a.757.757 0 0 0 .11-.242.079.079 0 0 0 .07-.024.153.153 0 0 1 .086-.098c.011-.039.015-.082.011-.12.07-.008.106-.048.098-.122.078-.008.102-.043.07-.11a.244.244 0 0 0 .086-.038c.043-.07.078-.14.11-.219.074 0 .097-.035.07-.098a.189.189 0 0 0 .11-.144.116.116 0 0 1 .085-.024 1.79 1.79 0 0 1 .098-.218.184.184 0 0 0 .094-.121c.023-.024.047-.032.074-.024V3.97h.168a1.673 1.673 0 0 1-.133.246 269.616 269.616 0 0 0-2.32 3.226.334.334 0 0 0-.11.086l-4.468.024c-.485.46-.957.933-1.426 1.41-.07.059-.13.047-.172-.024.031-.44.035-.882.016-1.324a.337.337 0 0 0-.04-.062l-3.406-.024-.062-.058c-.012-1.168-.016-2.332-.012-3.5Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#8f43fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="bZ" clipPath="url(#w)">
                <path
                  d="M65.852 6.035c.03.016.03.016 0 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#00f",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cb" clipPath="url(#x)">
                <path
                  d="M66.309 5.402c.035.016.035.016 0 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#00f",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cd" clipPath="url(#y)">
                <path
                  d="M65.586 6.398c.031.016.031.016 0 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#00f",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cf" clipPath="url(#z)">
                <path
                  d="M28.797 7.031c.035.016.035.016 0 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#00f",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ch" clipPath="url(#A)">
                <path
                  d="M59.11 7.418c.007-.023.023-.027.046-.012-.015.012-.031.016-.047.012Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#00f",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cj" clipPath="url(#B)">
                <path
                  d="M49.465 7.492h-3.942V7.47h3.942v-2.43a41.43 41.43 0 0 0-1.985-.047c-.667 0-1.335.008-2.003.024v-.024c0-.015.011-.027.023-.039 1.32-.016 2.64-.016 3.965 0 .012.012.023.024.035.04.016.823.016 1.648 0 2.476a.057.057 0 0 1-.035.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c59eff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cl" clipPath="url(#C)">
                <path
                  d="M45.5 7.492H49.465a41.43 41.43 0 0 1-3.965 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9b57ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cn" clipPath="url(#D)">
                <path
                  d="M25.969 8.465h3.336a61.643 61.643 0 0 1-3.407.047v-.024c.016-.023.04-.031.07-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ac7bfa",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cp" clipPath="url(#E)">
                <path
                  d="M44.46 8.535c-1.331-.008-2.663 0-3.987.024h-.024c0-.024.008-.051.024-.07a95.81 95.81 0 0 1 3.965-.012.08.08 0 0 1 .023.058Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b486fb",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cr" clipPath="url(#F)">
                <path
                  d="M49.441 8.465c-1.312.039-2.625.062-3.941.07h-.023a.058.058 0 0 1 .023-.058c1.313-.012 2.625-.02 3.941-.012Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a97df6",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ct" clipPath="url(#G)">
                <path
                  d="M54.586 8.465h3.336a61.643 61.643 0 0 1-3.406.047v-.024c.015-.023.039-.031.07-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ac7bfa",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cv" clipPath="url(#H)">
                <path
                  d="M67.059 12.52c-.024.003-.04-.004-.047-.028h.023c.028-1.305.031-2.617.012-3.933l-.035-.036c-2-.02-4-.015-5.996.012a.07.07 0 0 1 .027-.058c2.004-.024 4.012-.02 6.016.011.015.012.03.028.035.047.02 1.32.02 2.64 0 3.957a.05.05 0 0 1-.035.028Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a478f5",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cx" clipPath="url(#I)">
                <path
                  d="M72.11 8.488c0-.015.007-.023.027-.023.988-.008 1.98 0 2.972.012.012.007.02.02.024.035a97.52 97.52 0 0 1-3.024-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ac7bfa",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cz" clipPath="url(#J)">
                <path
                  d="M29.305 8.465c.03-.008.058 0 .074.023-.055-.004-.063.012-.024.047h-3.457v-.023c1.145.015 2.282 0 3.407-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c9a5fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cB" clipPath="url(#K)">
                <path
                  d="M49.441 8.465a.09.09 0 0 1 .059.07c.012 2.996.016 5.992.012 8.985-.02-2.98-.032-5.97-.035-8.961a168.563 168.563 0 0 0-3.977-.024 165.42 165.42 0 0 0 3.941-.07Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c198fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cD" clipPath="url(#L)">
                <path
                  d="M57.922 8.465c.031-.008.058 0 .074.023-.055-.004-.062.012-.023.047h-3.457v-.023c1.144.015 2.28 0 3.406-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c9a5fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cF" clipPath="url(#M)">
                <path
                  d="M67.035 12.492c.004-1.3 0-2.605-.012-3.906-.011-.016-.023-.027-.035-.04a374.07 374.07 0 0 0-5.922 0 .086.086 0 0 0-.05.04 49.936 49.936 0 0 0-1.883 1.867.078.078 0 0 0-.063.027c-.02 1.696-.015 3.387.012 5.075.172.144.324.308.461.484a6.358 6.358 0 0 0-.484-.437l-.07-.07a65.673 65.673 0 0 0 0-4.981.205.205 0 0 0 .058-.098 51.395 51.395 0 0 0 1.898-1.906.113.113 0 0 1 .07-.012 255.63 255.63 0 0 1 5.997-.012l.035.036c.02 1.316.016 2.629-.012 3.933Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c6a2fd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cH" clipPath="url(#N)">
                <path
                  d="M72.11 8.488c1.007.024 2.015.032 3.023.024l.023.047h-.047c-.988-.02-1.98-.032-2.972-.036a.05.05 0 0 1-.028-.035Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c9a4ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cJ" clipPath="url(#O)">
                <path
                  d="M25.898 8.535h3.457v.05h-.023c-1.145-.019-2.289-.034-3.434-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e3ceff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cL" clipPath="url(#P)">
                <path
                  d="M54.516 8.535h3.457v.05h-.024c-1.144-.019-2.289-.034-3.433-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e3ceff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cN" clipPath="url(#Q)">
                <path
                  d="M72.04 5.04c.007 1.151.03 2.304.07 3.448a.05.05 0 0 0 .027.035c.992.004 1.984.016 2.972.036-1.007.004-2.015 0-3.023-.012-.04-.024-.055-.063-.047-.11V5.04Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#dfc9ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cP" clipPath="url(#R)">
                <path
                  d="M29.355 8.535a.057.057 0 0 1 .036.024c.004 1.316.015 2.629.035 3.933 0 .02-.008.028-.024.028-.023.003-.039-.004-.047-.028.032-1.3.032-2.605 0-3.906v-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c299fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cR" clipPath="url(#S)">
                <path
                  d="M35.422 8.586v4.879h-.024c.008-1.61 0-3.223-.027-4.832a.086.086 0 0 1 .05-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#568da1",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cT" clipPath="url(#T)">
                <path
                  d="M40.45 8.559h.023v.027c.007 1.637 0 3.273-.024 4.902.004-.023-.004-.039-.023-.047-.008-1.632 0-3.257.023-4.882Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c29efb",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cV" clipPath="url(#U)">
                <path
                  d="M57.973 8.535a.057.057 0 0 1 .035.024c.004 1.316.015 2.629.035 3.933 0 .02-.008.028-.023.028-.024.003-.04-.004-.047-.028.03-1.3.03-2.605 0-3.906v-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c299fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cX" clipPath="url(#V)">
                <path
                  d="M30.441 8.559c-.007 2.336 0 4.668.024 6.996.172.144.324.308.46.484a6.358 6.358 0 0 0-.484-.437l-.07-.07c.04-2.321.063-4.645.07-6.973Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ccaafe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="cZ" clipPath="url(#W)">
                <path
                  d="m34.383 8.586.047 4.902a.069.069 0 0 0 .047.051c.32.031.644.031.968 0v.07c-.34.004-.675 0-1.015-.011-.04-.024-.055-.063-.047-.11V8.586Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#dcc5ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="db" clipPath="url(#X)">
                <path
                  d="M39.457 8.535h-.07c-1.313-.008-2.621 0-3.93.024-.012 1.66-.016 3.32-.012 4.98a5.017 5.017 0 0 1-.968 0c.308.008.613 0 .921-.023a.636.636 0 0 1 .024-.051v-4.88a.185.185 0 0 1 .047-.108c1.32-.02 2.644-.02 3.965 0 .02.015.027.035.023.058Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b98cfd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dd" clipPath="url(#Y)">
                <path
                  d="M40.547 8.559h3.89v4.152h-.023V8.586c-1.297.008-2.586 0-3.867-.027Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#f3ecfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="df" clipPath="url(#Z)">
                <path
                  d="M44.46 8.535c.009 3 0 5.996-.023 8.985V8.559h-3.89c-.027-.004-.043.004-.05.027h-.024v-.027c1.324-.024 2.656-.032 3.988-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#dbccf9",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dh" clipPath="url(#aa)">
                <path
                  d="M29.379 8.488c.031 0 .05.016.058.047a95.39 95.39 0 0 1-.011 3.957c-.02-1.305-.031-2.617-.035-3.933a.057.057 0 0 0-.036-.024c-.039-.035-.03-.05.024-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a468fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dj" clipPath="url(#ab)">
                <path
                  d="M34.36 8.535a.635.635 0 0 1 .023.05v4.903c-.02-1.62-.035-3.25-.04-4.879-1.288-.023-2.581-.03-3.878-.023v6.969c-.024-2.328-.031-4.66-.024-6.996a163.63 163.63 0 0 1 3.918-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#eaddff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dl" clipPath="url(#ac)">
                <path
                  d="M35.398 13.465h.024a.636.636 0 0 0-.024.05c-.308.024-.613.032-.921.024a.069.069 0 0 1-.047-.05V8.534h-.07a81.565 81.565 0 0 0-1.962-.023c-.66 0-1.312.015-1.957.047a517.372 517.372 0 0 1-.07 6.972c-.004-2.332 0-4.664.012-6.996l.058-.058c1.32-.02 2.645-.02 3.965 0l.035.035.024 4.953c.312.031.62.031.933 0Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a770fc",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dn" clipPath="url(#ad)">
                <path
                  d="M34.36 8.535h.07v4.953l-.047-4.902a.635.635 0 0 0-.024-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c198ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dp" clipPath="url(#ae)">
                <path
                  d="M34.36 8.535c-1.31-.008-2.614 0-3.919.024a40.409 40.409 0 0 1 1.957-.047c.657 0 1.313.008 1.961.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#caa6ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dr" clipPath="url(#af)">
                <path
                  d="M39.387 8.535v.024c-1.305-.008-2.606 0-3.907.027a522.495 522.495 0 0 1-.035 4.953c-.004-1.66 0-3.32.012-4.98 1.309-.024 2.617-.032 3.93-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#dfc9ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dt" clipPath="url(#ag)">
                <path
                  d="M39.387 8.559c.039 1.64.062 3.285.07 4.93 0 .027.008.046.023.062.325.011.645.015.97.011v-.074c.023-1.629.03-3.265.023-4.902h.023c.004 1.648 0 3.3-.012 4.953a.18.18 0 0 1-.035.059c-.332.015-.66.015-.992 0a.107.107 0 0 0-.047-.036 237.424 237.424 0 0 1-.023-5.003Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e8d9ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dv" clipPath="url(#ah)">
                <path
                  d="M39.48 8.586v4.902c.325.016.641 0 .946-.047.02.008.027.024.023.047v.075c-.324.003-.644 0-.969-.012a.082.082 0 0 1-.023-.063c-.008-1.636 0-3.273.023-4.902Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a97af8",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dx" clipPath="url(#ai)">
                <path
                  d="M39.387 8.559v-.024h.07a.636.636 0 0 1 .023.05c-.023 1.63-.03 3.267-.023 4.903-.008-1.644-.031-3.289-.07-4.93Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c6a1fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dz" clipPath="url(#aj)">
                <path
                  d="M57.996 8.488c.031 0 .05.016.059.047.023 1.324.02 2.645-.012 3.957-.02-1.305-.031-2.617-.035-3.933a.057.057 0 0 0-.035-.024c-.04-.035-.032-.05.023-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a468fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dB" clipPath="url(#ak)">
                <path
                  d="M75.156 8.559a.079.079 0 0 1 .074.027c.047.039.079.086.094.144.074-.007.106.024.098.098a.323.323 0 0 1-.266-.27Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c2a3f7",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dD" clipPath="url(#al)">
                <path
                  d="M75.422 8.828c.074-.008.105.024.098.098h.07c-.008.07.027.105.097.094v.074a.694.694 0 0 1-.265-.266Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b188f7",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dF" clipPath="url(#am)">
                <path
                  d="M75.688 9.094c.074-.008.105.023.097.097h.07v.075c.075-.008.106.023.098.097a.733.733 0 0 1-.266-.27Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ac87f2",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dH" clipPath="url(#an)">
                <path
                  d="M75.953 9.363c.074-.011.106.024.098.094a.28.28 0 0 1-.098-.094Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9a77eb",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dJ" clipPath="url(#ao)">
                <path
                  d="M76.05 9.457a.365.365 0 0 1 .145.086c.02.023.028.055.024.086.074-.008.105.023.097.098.075-.008.106.023.098.097h.07v.07c.075-.007.106.028.098.098a2.258 2.258 0 0 0-.168-.086c-.02-.058-.059-.09-.121-.082a.205.205 0 0 0-.012-.097.653.653 0 0 0-.172-.122.84.84 0 0 0-.058-.148Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c2a4f7",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dL" clipPath="url(#ap)">
                <path
                  d="M76.582 9.992c.074-.008.106.024.098.098a.325.325 0 0 1 .144.086c.02.023.028.05.024.086.074-.012.105.023.097.093h.07c0 .036.008.07.028.098h-.027a3.03 3.03 0 0 1-.434-.46Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b18cf5",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dN" clipPath="url(#aq)">
                <path
                  d="M58.988 10.55a65.466 65.466 0 0 1 0 4.981v-4.98Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a568ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dP" clipPath="url(#ar)">
                <path
                  d="M59.133 10.453c-.012.024-.024.05-.04.074a539.19 539.19 0 0 0-.011 5.028 183.038 183.038 0 0 1-.012-5.075.078.078 0 0 1 .063-.027Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e7d8ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dR" clipPath="url(#as)">
                <path
                  d="M77.016 10.453h.027v.05c.031 2.333.031 4.665 0 6.993-.027-2.348-.035-4.695-.027-7.043Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#f5edff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dT" clipPath="url(#at)">
                <path
                  d="M77.043 10.504c.012 0 .027.008.035.023.02 2.332.016 4.664-.012 6.993a73.657 73.657 0 0 1-3.941 0c1.309.007 2.613 0 3.918-.024.031-2.328.031-4.66 0-6.992Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#dec8ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dV" clipPath="url(#au)">
                <path
                  d="M29.332 8.586h.023c.032 1.3.032 2.605 0 3.906-1.156-.008-2.308 0-3.457.028a5.813 5.813 0 0 0 0 1.043l3.434.046c-1.152.004-2.305 0-3.457-.011a6.608 6.608 0 0 1 0-1.118c1.152-.011 2.305-.015 3.457-.011V8.586Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ece0ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dX" clipPath="url(#av)">
                <path
                  d="M57.95 8.586h.023c.03 1.3.03 2.605 0 3.906-1.157-.008-2.309 0-3.457.028-.024.316-.032.64-.024.968a4.828 4.828 0 0 1 0-1.008c1.153-.011 2.305-.015 3.457-.011V8.586Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ebdefe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="dZ" clipPath="url(#aw)">
                <path
                  d="M67.035 12.492h-.023c-1.313-.004-2.63 0-3.942.016l-.058.058c-.012.309-.016.618-.012.922a4.828 4.828 0 0 1 0-1.008c1.328-.011 2.656-.015 3.988-.011V8.586h-5.972a.086.086 0 0 1 .05-.04 374.07 374.07 0 0 1 5.922 0c.012.013.024.024.035.04.012 1.3.016 2.605.012 3.906Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#eaddff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eb" clipPath="url(#ax)">
                <path
                  d="M25.898 12.52c1.149-.028 2.301-.036 3.457-.028.008.024.024.031.047.028a.07.07 0 0 1-.047.046c0-.015-.007-.023-.023-.023-1.14-.023-2.285-.031-3.434-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#cfb2fd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ed" clipPath="url(#ay)">
                <path
                  d="M54.516 12.52c1.148-.028 2.3-.036 3.457-.028.007.024.023.031.047.028a.07.07 0 0 1-.047.046c0-.015-.008-.023-.024-.023-1.14-.023-2.285-.031-3.433-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#cfb2fd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ef" clipPath="url(#az)">
                <path
                  d="M67.012 12.492c.008.024.023.031.047.028a.07.07 0 0 1-.047.046.057.057 0 0 0-.024-.035 161.791 161.791 0 0 0-3.894 0l-.035.035a9.617 9.617 0 0 0 0 .95l.035.035c1.308.011 2.613.015 3.918.011v.047h-.024c-1.3-.02-2.61-.03-3.918-.035a.484.484 0 0 1-.07-.086c-.004-.304 0-.613.012-.922l.058-.058c1.313-.016 2.63-.02 3.942-.016Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#d1b4fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eh" clipPath="url(#aA)">
                <path
                  d="M25.898 12.52c1.149-.008 2.293 0 3.434.023-1.145-.016-2.281 0-3.41.047a.065.065 0 0 1-.024-.07Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b079ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ej" clipPath="url(#aB)">
                <path
                  d="M54.516 12.52c1.148-.008 2.293 0 3.433.023-1.144-.016-2.281 0-3.41.047a.065.065 0 0 1-.023-.07Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b079ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="el" clipPath="url(#aC)">
                <path
                  d="M29.332 12.543c.016 0 .023.008.023.023-1.128-.007-2.257 0-3.386.024h-.047a61.838 61.838 0 0 1 3.41-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9750fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="en" clipPath="url(#aD)">
                <path
                  d="M57.95 12.543c.015 0 .023.008.023.023-1.13-.007-2.258 0-3.387.024h-.047a61.838 61.838 0 0 1 3.41-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9750fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ep" clipPath="url(#aE)">
                <path
                  d="M77.043 10.453h.07c.028 2.356.032 4.711.012 7.067a.149.149 0 0 0-.035.05c-1.324-.008-2.645 0-3.965.024a.107.107 0 0 1-.035-.047c-.012-1.645-.016-3.29-.012-4.93-.031.004-.055-.004-.074-.027.031.008.058 0 .074-.024h.024c-.008 1.657 0 3.309.023 4.954 1.313.035 2.625.035 3.941 0 .028-2.329.032-4.66.012-6.993a.042.042 0 0 0-.035-.023v-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bd90fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="er" clipPath="url(#aF)">
                <path
                  d="M73.078 12.492a.129.129 0 0 1 .024.074h-.024a.057.057 0 0 0-.023-.035 6.677 6.677 0 0 0-.97.012l-.046 4.977v-4.93c-.004-.04.012-.067.047-.082.332-.016.66-.02.992-.016Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#d8beff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="et" clipPath="url(#aG)">
                <path
                  d="M73.078 12.492c.047 1.668.063 3.344.047 5.028a261.24 261.24 0 0 1-.023-4.954.129.129 0 0 0-.024-.074Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#e5d2ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ev" clipPath="url(#aH)">
                <path
                  d="M73.078 12.566c-.016.024-.043.032-.074.024a4.132 4.132 0 0 0-.879 0c-.016 1.637-.02 3.273-.016 4.906a261.395 261.395 0 0 1-.023-4.953c.32-.027.644-.031.969-.012.011.008.02.02.023.035Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ad75fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ex" clipPath="url(#aI)">
                <path
                  d="M72.086 12.543c-.008 1.656 0 3.305.023 4.953a.145.145 0 0 1-.046.098c-1.317-.024-2.637-.032-3.965-.024 1.304-.015 2.613-.035 3.918-.05h.023l.047-4.977Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c198fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ez" clipPath="url(#aJ)">
                <path
                  d="M25.898 12.52a.065.065 0 0 0 .024.07h.047c-.016.023-.04.031-.07.027-.016.297 0 .586.046.871-.011.004-.02.012-.023.028l3.433.046h-3.457a5.813 5.813 0 0 1 0-1.042Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bc91fd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eB" clipPath="url(#aK)">
                <path
                  d="M63 13.488c.02.032.043.059.07.086 1.309.004 2.617.016 3.918.035-1.316.004-2.629 0-3.941-.011-.04-.024-.055-.063-.047-.11Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#efe4ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eD" clipPath="url(#aL)">
                <path
                  d="M67.012 12.566c-1.297-.004-2.594 0-3.89.012-.013.012-.028.024-.04.04-.02.288-.016.573.012.859l3.918.023a.219.219 0 0 1 .058.04c.028.667.043 1.339.04 2.015 0 .664-.012 1.328-.028 1.992h-.07v-.027h.023c.028-1.305.031-2.618.012-3.934a.057.057 0 0 0-.035-.024c-1.305.004-2.61 0-3.918-.011l-.035-.035a9.617 9.617 0 0 1 0-.95l.035-.035c1.3-.015 2.597-.015 3.894 0 .012.008.02.02.024.035Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9f73f2",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eF" clipPath="url(#aM)">
                <path
                  d="M25.898 13.563h3.457l.024.046c.008 1.309 0 2.614-.024 3.91.008-1.304 0-2.609-.023-3.91l-3.434-.046Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#dcc5ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eH" clipPath="url(#aN)">
                <path
                  d="m29.379 13.61.047 3.937a.07.07 0 0 1-.047.047c.004-.024-.004-.04-.024-.047v-.027c.024-1.297.032-2.602.024-3.91Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c199fd",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eJ" clipPath="url(#aO)">
                <path
                  d="M56.063 13.563c.636-.004 1.273 0 1.91.011.011.012.02.024.023.035.008 1.309 0 2.614-.023 3.91.007-1.304 0-2.609-.024-3.91l-1.886-.046Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#d5c5f8",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eL" clipPath="url(#aP)">
                <path
                  d="M67.012 13.563a.057.057 0 0 1 .035.023c.02 1.316.016 2.629-.012 3.934.008-1.305 0-2.61-.023-3.91v-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#c197ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eN" clipPath="url(#aQ)">
                <path
                  d="M25.945 13.488c1.137-.004 2.274 0 3.41.012.02.012.043.023.06.04.026.667.038 1.339.034 2.015 0 .664-.008 1.328-.023 1.992l-.047-3.938-.024-.046-3.433-.047c.004-.016.012-.024.023-.028Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9c6df3",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eP" clipPath="url(#aR)">
                <path
                  d="M57.973 13.516c.047 0 .074.023.082.07.011 1.312.02 2.625.011 3.934-.02-1.301-.043-2.606-.07-3.91a.092.092 0 0 0-.023-.036 77.846 77.846 0 0 0-1.91-.011h-.047a.05.05 0 0 0-.028-.036c.66-.011 1.325-.015 1.985-.011Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a370f8",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eR" clipPath="url(#aS)">
                <path
                  d="M22.031 15.723h.047c.149.164.305.32.461.476.285.29.574.578.871.86.024.023.024.039 0 .05-.476-.449-.937-.91-1.379-1.386Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#a48fe7",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eT" clipPath="url(#aT)">
                <path
                  d="M30.441 15.602c.168.136.329.28.485.437.492.504.984 1.004 1.472 1.508a57.439 57.439 0 0 1-1.957-1.945Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b58bfa",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eV" clipPath="url(#aU)">
                <path
                  d="M59.059 15.602c.168.136.328.28.484.437.492.504.984 1.004 1.473 1.508a57.438 57.438 0 0 1-1.957-1.945Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#b58bfa",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eX" clipPath="url(#aV)">
                <path
                  d="M20.871 16.063c.024-.004.05 0 .07.011a2907.31 2907.31 0 0 0 6.926 6.934c.02.031.031.062.035.097a.55.55 0 0 1-.191-.046c.008-.075-.023-.106-.098-.098v-.074h-.07c.008-.07-.027-.106-.098-.098.008-.07-.023-.105-.097-.098v-.07h-.07c.007-.074-.028-.105-.098-.098.008-.074-.024-.105-.098-.097a.125.125 0 0 0-.012-.074.217.217 0 0 1-.086-.082c-.023-.012-.047-.016-.07-.012.008-.074-.023-.106-.098-.098.008-.074-.023-.105-.097-.098v-.074h-.07c.007-.07-.024-.105-.098-.097.008-.07-.024-.106-.098-.098v-.07h-.07c.008-.075-.028-.106-.098-.098.008-.074-.023-.105-.098-.098a.325.325 0 0 0-.085-.144.103.103 0 0 0-.082-.024c.007-.074-.024-.105-.098-.097.008-.075-.024-.106-.098-.098v-.074h-.07c.008-.07-.024-.106-.098-.098.008-.07-.023-.105-.097-.097v-.07h-.07c.007-.075-.024-.106-.098-.098.007-.075-.024-.106-.098-.098v-.074c-.055-.032-.113-.063-.168-.094.008-.074-.023-.106-.098-.098.008-.074-.023-.105-.097-.097v-.075h-.07c.007-.07-.024-.105-.098-.097.008-.07-.024-.106-.098-.098v-.07h-.07c.008-.074-.024-.106-.098-.098.008-.074-.023-.105-.098-.098v-.074c-.07.008-.105-.023-.093-.093h-.075c.008-.075-.023-.106-.097-.098.008-.074-.024-.106-.098-.098v-.074c-.055-.031-.11-.063-.168-.098-.031-.054-.062-.113-.097-.168-.07.008-.102-.023-.094-.097h-.074a3.836 3.836 0 0 0-.098-.172c-.07.008-.102-.024-.094-.094-.031.004-.055-.004-.074-.027a.282.282 0 0 1-.098-.145c-.07.008-.105-.023-.093-.097a3.837 3.837 0 0 1-.172-.098c-.032-.055-.063-.113-.098-.168-.07.008-.102-.024-.094-.098h-.074a3.836 3.836 0 0 0-.098-.172h-.093v-.093a2.192 2.192 0 0 1-.243-.184.112.112 0 0 1-.023-.086 3.836 3.836 0 0 1-.172-.098c-.031-.054-.062-.113-.094-.168-.074.008-.105-.023-.097-.097h-.075a3.836 3.836 0 0 0-.097-.172h-.094v-.098c-.031.008-.055 0-.074-.023a.308.308 0 0 1-.098-.145c-.07.008-.101-.023-.094-.097a.083.083 0 0 1-.074-.024.3.3 0 0 1-.097-.144c-.07.008-.102-.028-.094-.098-.074.008-.106-.023-.098-.098-.086-.023-.125-.078-.12-.172Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9149fc",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="eZ" clipPath="url(#aW)">
                <path
                  d="M29.332 13.61c.023 1.3.031 2.605.023 3.91-1.843.007-3.68 0-5.511-.024h5.488V13.61Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#f4ecff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fb" clipPath="url(#aX)">
                <path
                  d="M66.988 13.61h.024c.023 1.3.031 2.605.023 3.91h-.023c-1.996.007-3.985 0-5.969-.024h5.945V13.61Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#eee2ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fd" clipPath="url(#aY)">
                <path
                  d="M23.41 17.059c.113.09.219.187.324.293l.024.07c.043.012.07.039.086.074 1.832.024 3.668.031 5.511.024v.027h-5.488a3.234 3.234 0 0 1-.457-.438c.024-.011.024-.027 0-.05Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#d5befb",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ff" clipPath="url(#aZ)">
                <path
                  d="M30.926 16.04a48.22 48.22 0 0 1 1.5 1.468c4.004.012 8.008.015 12.011.012-1.714.027-3.43.035-5.148.027H32.4c-.489-.504-.981-1.004-1.473-1.508Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#d7c4fa",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fh" clipPath="url(#ba)">
                <path
                  d="M59.543 16.04a.051.051 0 0 1 .047.01c.48.49.965.97 1.453 1.446 1.984.024 3.973.031 5.969.024v.027h-5.996c-.489-.504-.98-1.004-1.473-1.508Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#ddc5ff",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fj" clipPath="url(#bb)">
                <path
                  d="M23.867 17.547h5.488l-5.437.047a.069.069 0 0 1-.05-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bb8dfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fl" clipPath="url(#bc)">
                <path
                  d="M61.016 17.547H67.082a.185.185 0 0 1-.07.047 379.839 379.839 0 0 0-5.969-.024c-.02 0-.027-.008-.027-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#bb8dfe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fn" clipPath="url(#bd)">
                <path
                  d="M29.355 17.547c.02.008.028.023.024.047-1.824.031-3.645.031-5.461 0l5.437-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9c58fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fp" clipPath="url(#be)">
                <path
                  d="M32.426 17.57c2.285-.015 4.566 0 6.84.047-2.29.016-4.57 0-6.84-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9c58fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fr" clipPath="url(#bf)">
                <path
                  d="M61.043 17.57c1.992-.008 3.98 0 5.969.024-.992.015-1.989.023-2.985.023-1.004 0-2-.015-2.984-.047Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9c58fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="ft" clipPath="url(#bg)">
                <path
                  d="M68.098 17.57c1.328-.008 2.648 0 3.965.024a83.852 83.852 0 0 1-3.965 0v-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9852fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fv" clipPath="url(#bh)">
                <path
                  d="M77.09 17.57a.057.057 0 0 1-.024.035c-1.316.02-2.632.016-3.941-.011 1.32-.024 2.64-.032 3.965-.024Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9851fe",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <g id="fx" clipPath="url(#bi)">
                <path
                  d="M78.105 18.59a.32.32 0 0 1-.011.12c-.317.302-.625.61-.93.923-.02.023-.047.031-.074.023.008.074-.024.106-.098.098v.074l-.168.098c.008.07-.023.105-.097.097v.07c-.07-.007-.106.028-.098.098-.055.032-.11.067-.168.098a3.835 3.835 0 0 1-.098.172l-.168.094a3.836 3.836 0 0 1-.097.172c-.07-.008-.102.023-.094.097h-.074c.007.07-.024.106-.098.098v.07c-.07-.008-.105.028-.094.098-.058.031-.113.066-.172.098a3.836 3.836 0 0 1-.097.171c-.07-.007-.102.024-.094.094h-.074a3.836 3.836 0 0 1-.098.172c-.07-.008-.101.023-.094.098h-.074c.008.07-.023.105-.097.097v.07c-.07-.007-.102.028-.094.098-.059.032-.114.067-.172.098v.074c-.07-.008-.106.024-.094.098-.074-.008-.105.023-.098.094h-.074a3.836 3.836 0 0 1-.097.171c-.07-.007-.102.024-.094.098h-.074c.007.07-.024.106-.098.098v.07c-.07-.008-.102.027-.094.098-.074-.008-.105.023-.097.097h-.075v.075a.53.53 0 0 1-.191.046.227.227 0 0 1 .035-.097 358.176 358.176 0 0 0 4.387-4.395.113.113 0 0 1 .097-.023Zm0 0"
                  style={{
                    stroke: "none",
                    fillRule: "evenodd",
                    fill: "#9049fc",
                    fillOpacity: 1,
                  }}
                />
              </g>
              <filter
                id="a"
                width="100%"
                height="100%"
                x="0%"
                y="0%"
                filterUnits="objectBoundingBox"
              >
                <feColorMatrix
                  in="SourceGraphic"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                />
              </filter>
            </defs>
            <path
              d="M26.383 3.969c.027.078.066.148.11.219a71.62 71.62 0 0 1 1.882 2.625c.164.199.32.41.46.628a.59.59 0 0 0 .11.086c5.172.016 10.344.016 15.516 0a.18.18 0 0 0 .035-.058c.012-1.168.016-2.332.012-3.5h10.949c-.004 1.168 0 2.332.012 3.5l.062.058 3.407.024c.015.02.027.039.039.062.02.442.015.883-.016 1.324.043.07.102.083.172.024.469-.477.941-.95 1.426-1.41l4.468-.024a.334.334 0 0 1 .11-.086c.765-1.082 1.539-2.156 2.32-3.226.05-.082.098-.16.133-.246h5.465c-.012 1.183 0 2.367.035 3.547.824.02 1.648.03 2.476.035a.796.796 0 0 1 .172.12c.77.774 1.535 1.552 2.293 2.333.024.012.047.016.074.012v8.574a.113.113 0 0 0-.097.023 358.176 358.176 0 0 1-4.387 4.395.227.227 0 0 0-.035.097c-4.14-.003-8.281.004-12.426.024-.02 3.61-1.36 6.617-4.012 9.023-2.59 2.18-5.582 3.11-8.964 2.793-3.766-.515-6.664-2.375-8.692-5.574a11.719 11.719 0 0 1-1.68-6.242l-9.91-.024a.227.227 0 0 0-.035-.097 2907.31 2907.31 0 0 1-6.926-6.934c-.02-.012-.046-.015-.07-.012V3.97h5.512Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#1db854",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#bj" mask="url(#bk)" />
            <use xlinkHref="#bl" mask="url(#bm)" />
            <use xlinkHref="#bn" mask="url(#bo)" />
            <use xlinkHref="#bp" mask="url(#bq)" />
            <use xlinkHref="#br" mask="url(#bs)" />
            <path
              d="M22.008 5.04c1.273-.005 2.543 0 3.816.01.016 1.15.035 2.294.051 3.438h.023v.047c1.145.016 2.29.031 3.434.05v3.884c-1.152-.004-2.305 0-3.457.011a6.677 6.677 0 0 0 0 1.118c1.152.011 2.305.015 3.457.011v3.887h-5.488a.127.127 0 0 0-.086-.074l-.024-.07a3.785 3.785 0 0 0-.324-.293c-.297-.282-.586-.57-.87-.86-.157-.156-.313-.312-.462-.476-.039-.067-.082-.13-.121-.192-.004-3.48 0-6.965.012-10.445a.091.091 0 0 0 .039-.047Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefeff",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#bt" mask="url(#bu)" />
            <path
              d="M49.39 5.016c.028 0 .051.007.075.023v2.43h-3.942c-.015 0-.023-.008-.023-.028v-.07c.023-.766.031-1.535.023-2.309 1.282.004 2.563 0 3.844-.011a.057.057 0 0 0 .024-.035Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefeff",
                fillOpacity: 1,
              }}
            />
            <path
              d="M54.492 8.488h.024v.047c1.144.016 2.289.031 3.433.05v3.884c-1.152-.004-2.304 0-3.457.011-.035.34-.035.676 0 1.008v.121h3.457v3.887h-5.488a.798.798 0 0 1-.266-.316.12.12 0 0 1-.074-.012c-.344-.352-.687-.703-1.039-1.055a3.591 3.591 0 0 0-.41-.363c-.016 0-.024-.012-.024-.027-.023-.047-.046-.098-.074-.145a169.226 169.226 0 0 1-.023-3.984c-.008-2.18 0-4.364.023-6.543 1.29-.016 2.578-.016 3.867 0 .016 1.148.036 2.293.051 3.437Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefefe",
                fillOpacity: 1,
              }}
            />
            <path
              d="M72.04 8.438c-.009.046.007.085.046.109 1.008.012 2.016.015 3.023.012h.047a.323.323 0 0 0 .266.27.694.694 0 0 0 .266.265.733.733 0 0 0 .265.27.28.28 0 0 0 .098.093.84.84 0 0 1 .058.148c.063.032.121.07.172.122a.205.205 0 0 1 .012.097c.062-.008.102.024.121.082.059.028.113.055.168.086.129.168.273.324.434.461-.008 2.348 0 4.695.027 7.043-1.305.024-2.61.031-3.918.024.016-1.684 0-3.36-.047-5.028-.332-.004-.66 0-.992.016-.035.015-.05.043-.047.082a256.468 256.468 0 0 0-.023 4.906H68.12c-.004-4.144 0-8.289.016-12.433 1.281-.02 2.566-.032 3.851-.036.02 1.141.035 2.278.051 3.41Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefeff",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#bv" mask="url(#bw)" />
            <use xlinkHref="#bx" mask="url(#by)" />
            <use xlinkHref="#bz" mask="url(#bA)" />
            <use xlinkHref="#bB" mask="url(#bC)" />
            <use xlinkHref="#bD" mask="url(#bE)" />
            <use xlinkHref="#bF" mask="url(#bG)" />
            <use xlinkHref="#bH" mask="url(#bI)" />
            <use xlinkHref="#bJ" mask="url(#bK)" />
            <use xlinkHref="#bL" mask="url(#bM)" />
            <use xlinkHref="#bN" mask="url(#bO)" />
            <use xlinkHref="#bP" mask="url(#bQ)" />
            <use xlinkHref="#bR" mask="url(#bS)" />
            <use xlinkHref="#bT" mask="url(#bU)" />
            <use xlinkHref="#bV" mask="url(#bW)" />
            <use xlinkHref="#bX" mask="url(#bY)" />
            <use xlinkHref="#bZ" mask="url(#ca)" />
            <use xlinkHref="#cb" mask="url(#cc)" />
            <use xlinkHref="#cd" mask="url(#ce)" />
            <use xlinkHref="#cf" mask="url(#cg)" />
            <use xlinkHref="#ch" mask="url(#ci)" />
            <use xlinkHref="#cj" mask="url(#ck)" />
            <use xlinkHref="#cl" mask="url(#cm)" />
            <use xlinkHref="#cn" mask="url(#co)" />
            <use xlinkHref="#cp" mask="url(#cq)" />
            <use xlinkHref="#cr" mask="url(#cs)" />
            <use xlinkHref="#ct" mask="url(#cu)" />
            <use xlinkHref="#cv" mask="url(#cw)" />
            <use xlinkHref="#cx" mask="url(#cy)" />
            <use xlinkHref="#cz" mask="url(#cA)" />
            <use xlinkHref="#cB" mask="url(#cC)" />
            <use xlinkHref="#cD" mask="url(#cE)" />
            <use xlinkHref="#cF" mask="url(#cG)" />
            <use xlinkHref="#cH" mask="url(#cI)" />
            <use xlinkHref="#cJ" mask="url(#cK)" />
            <use xlinkHref="#cL" mask="url(#cM)" />
            <use xlinkHref="#cN" mask="url(#cO)" />
            <path
              d="M39.387 8.559c-.012 1.668 0 3.336.023 5.004.02.007.035.019.047.035.332.015.66.015.992 0a.18.18 0 0 0 .035-.059c.012-1.652.016-3.305.012-4.953.008-.024.024-.031.05-.027 1.282.027 2.571.035 3.868.027v4.125c-.02.797-.027 1.594-.027 2.394 0 .805.015 1.602.05 2.391v.024c-4.003.003-8.007 0-12.011-.012a48.22 48.22 0 0 0-1.5-1.469 3.179 3.179 0 0 0-.461-.484v-6.97c1.297-.007 2.59 0 3.879.024.004 1.63.02 3.258.039 4.88-.008.046.008.085.047.109.34.011.675.015 1.015.011v-.07c.02-1.648.032-3.3.035-4.953 1.301-.027 2.602-.035 3.907-.027Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefefe",
                fillOpacity: 1,
              }}
            />
            <path
              d="M61.016 8.586h5.972v3.883c-1.332-.004-2.66 0-3.988.011-.035.34-.035.676 0 1.008-.008.047.008.086.047.11 1.312.011 2.625.015 3.941.011v3.887h-5.945c-.488-.476-.973-.957-1.453-1.445a.051.051 0 0 0-.047-.012 3.179 3.179 0 0 0-.461-.484c-.004-1.676 0-3.352.012-5.028.015-.023.027-.05.039-.074a49.936 49.936 0 0 1 1.883-1.867Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefeff",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#cP" mask="url(#cQ)" />
            <use xlinkHref="#cR" mask="url(#cS)" />
            <use xlinkHref="#cT" mask="url(#cU)" />
            <use xlinkHref="#cV" mask="url(#cW)" />
            <use xlinkHref="#cX" mask="url(#cY)" />
            <use xlinkHref="#cZ" mask="url(#da)" />
            <use xlinkHref="#db" mask="url(#dc)" />
            <use xlinkHref="#dd" mask="url(#de)" />
            <use xlinkHref="#df" mask="url(#dg)" />
            <use xlinkHref="#dh" mask="url(#di)" />
            <use xlinkHref="#dj" mask="url(#dk)" />
            <use xlinkHref="#dl" mask="url(#dm)" />
            <use xlinkHref="#dn" mask="url(#do)" />
            <use xlinkHref="#dp" mask="url(#dq)" />
            <use xlinkHref="#dr" mask="url(#ds)" />
            <use xlinkHref="#dt" mask="url(#du)" />
            <use xlinkHref="#dv" mask="url(#dw)" />
            <use xlinkHref="#dx" mask="url(#dy)" />
            <path
              d="M45.477 8.535h.023c1.328-.008 2.652 0 3.977.024.003 2.992.015 5.98.035 8.96 0 .016-.008.028-.024.028a150.6 150.6 0 0 1-3.988-.027c-.023-2.989-.031-5.985-.023-8.985Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#d7c5fa",
                fillOpacity: 1,
              }}
            />
            <path
              d="M45.5 17.52V8.559c1.32-.008 2.637 0 3.953.027.012 2.976.016 5.957.012 8.934H45.5Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefefe",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#dz" mask="url(#dA)" />
            <use xlinkHref="#dB" mask="url(#dC)" />
            <use xlinkHref="#dD" mask="url(#dE)" />
            <use xlinkHref="#dF" mask="url(#dG)" />
            <use xlinkHref="#dH" mask="url(#dI)" />
            <use xlinkHref="#dJ" mask="url(#dK)" />
            <use xlinkHref="#dL" mask="url(#dM)" />
            <use xlinkHref="#dN" mask="url(#dO)" />
            <use xlinkHref="#dP" mask="url(#dQ)" />
            <use xlinkHref="#dR" mask="url(#dS)" />
            <use xlinkHref="#dT" mask="url(#dU)" />
            <path
              d="M50.504 11.594c-.004 1.312 0 2.625.012 3.937.015.02.035.035.058.047.028.047.051.098.074.145a2.11 2.11 0 0 1-.156-.121.113.113 0 0 1-.012-.07c-.007-1.317 0-2.63.024-3.938Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#aba3e4",
                fillOpacity: 1,
              }}
            />
            <path
              d="M50.504 11.594h.047c-.008 1.332 0 2.656.023 3.984a.173.173 0 0 1-.058-.047 330.757 330.757 0 0 1-.012-3.937Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#c9d5e3",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#dV" mask="url(#dW)" />
            <use xlinkHref="#dX" mask="url(#dY)" />
            <use xlinkHref="#dZ" mask="url(#ea)" />
            <use xlinkHref="#eb" mask="url(#ec)" />
            <use xlinkHref="#ed" mask="url(#ee)" />
            <use xlinkHref="#ef" mask="url(#eg)" />
            <use xlinkHref="#eh" mask="url(#ei)" />
            <use xlinkHref="#ej" mask="url(#ek)" />
            <use xlinkHref="#el" mask="url(#em)" />
            <use xlinkHref="#en" mask="url(#eo)" />
            <use xlinkHref="#ep" mask="url(#eq)" />
            <use xlinkHref="#er" mask="url(#es)" />
            <use xlinkHref="#et" mask="url(#eu)" />
            <use xlinkHref="#ev" mask="url(#ew)" />
            <use xlinkHref="#ex" mask="url(#ey)" />
            <path
              d="M44.414 12.71h.023v4.786c-.035-.789-.05-1.586-.05-2.39 0-.801.008-1.598.027-2.395Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#e4efee",
                fillOpacity: 1,
              }}
            />
            <path
              d="M54.516 12.52a.065.065 0 0 0 .023.07h.047c-.016.023-.04.031-.07.027-.016.293 0 .578.047.86 1.14.003 2.277.015 3.41.039-.66-.004-1.325 0-1.985.011a.05.05 0 0 1 .028.036h-1.5a.083.083 0 0 0-.024-.075c-.008-.328 0-.652.024-.968Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#8886d2",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#ez" mask="url(#eA)" />
            <path
              d="M54.492 13.488c.02.02.028.043.024.075h1.547l1.886.046h-3.457v-.12Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#d9d8f1",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#eB" mask="url(#eC)" />
            <use xlinkHref="#eD" mask="url(#eE)" />
            <use xlinkHref="#eF" mask="url(#eG)" />
            <use xlinkHref="#eH" mask="url(#eI)" />
            <use xlinkHref="#eJ" mask="url(#eK)" />
            <use xlinkHref="#eL" mask="url(#eM)" />
            <use xlinkHref="#eN" mask="url(#eO)" />
            <use xlinkHref="#eP" mask="url(#eQ)" />
            <path
              d="M57.996 13.61c.027 1.304.05 2.609.07 3.91a.145.145 0 0 1-.07.074c.004-.024-.004-.04-.023-.047v-.027c.023-1.297.03-2.602.023-3.91Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#9e96de",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#eR" mask="url(#eS)" />
            <path
              d="M50.672 15.75c.144.11.281.23.41.363.352.352.695.703 1.04 1.055.023.012.046.016.073.012.059.129.149.23.266.316 1.832.024 3.668.031 5.512.024v.027h-5.489a.571.571 0 0 1-.168-.125c-.183-.184-.367-.367-.554-.543-.375-.375-.735-.75-1.09-1.129Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#a6a5dd",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#eT" mask="url(#eU)" />
            <use xlinkHref="#eV" mask="url(#eW)" />
            <use xlinkHref="#eX" mask="url(#eY)" />
            <use xlinkHref="#eZ" mask="url(#fa)" />
            <path
              d="M57.95 13.61c.023 1.3.03 2.605.023 3.91-1.844.007-3.68 0-5.512-.024h5.488V13.61Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#ecebf8",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#fb" mask="url(#fc)" />
            <use xlinkHref="#fd" mask="url(#fe)" />
            <use xlinkHref="#ff" mask="url(#fg)" />
            <use xlinkHref="#fh" mask="url(#fi)" />
            <use xlinkHref="#fj" mask="url(#fk)" />
            <path
              d="M44.46 8.535c.032 3.008.032 6.02 0 9.035h-5.17v-.023c1.718.008 3.433 0 5.148-.027.023-2.989.03-5.985.023-8.985Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#a899e6",
                fillOpacity: 1,
              }}
            />
            <path
              d="M45.477 8.535c-.008 3 0 5.996.023 8.985 1.324.027 2.656.035 3.988.027 0 .015-.008.023-.023.023-1.328-.008-2.649 0-3.965.024-.016-.012-.031-.028-.035-.047-.02-3.008-.016-6.012.012-9.012Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#a996e9",
                fillOpacity: 1,
              }}
            />
            <path
              d="M52.484 17.547h5.489l-5.465.047c-.02-.008-.028-.024-.024-.047Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#9d96dd",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#fl" mask="url(#fm)" />
            <use xlinkHref="#fn" mask="url(#fo)" />
            <use xlinkHref="#fp" mask="url(#fq)" />
            <path
              d="M39.29 17.57h5.17a.07.07 0 0 1-.046.047l-5.125-.047Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#8272d8",
                fillOpacity: 1,
              }}
            />
            <path
              d="M57.973 17.547c.02.008.027.023.023.047-1.828.031-3.656.031-5.488 0l5.465-.047Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#816cda",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#fr" mask="url(#fs)" />
            <path
              d="M32.398 17.547h6.891v.023l5.125.047h-5.148a249.22 249.22 0 0 0-6.84-.047c-.02 0-.028-.008-.028-.023Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#9470ea",
                fillOpacity: 1,
              }}
            />
            <path
              d="M49.465 17.57a41.43 41.43 0 0 1-1.985.047c-.664 0-1.324-.008-1.98-.023 1.316-.024 2.637-.032 3.965-.024Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#7c6ad7",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#ft" mask="url(#fu)" />
            <use xlinkHref="#fv" mask="url(#fw)" />
            <path
              d="M50.02 24.078a.057.057 0 0 0 .023.035c.469.012.934.016 1.402.012v.8c-.457-.003-.918 0-1.379.016-.285.13-.351.336-.203.618a.3.3 0 0 0 .203.132c.461.012.922.016 1.38.012v.805c-.458-.008-.919 0-1.38.012-.265.125-.343.324-.226.593.062.078.137.14.226.184.461.012.922.015 1.38.012A2.234 2.234 0 0 1 51 28.91c-.652.692-1.422.875-2.309.547-.652-.324-1.035-.844-1.148-1.566a7.27 7.27 0 0 1-.012-.582c.442.003.887 0 1.328-.012.297-.106.391-.305.278-.598a.493.493 0 0 0-.254-.18c-.45-.011-.903-.019-1.352-.011v-.805c.45.004.903 0 1.352-.012.191-.054.297-.183.316-.386-.02-.2-.125-.32-.316-.364-.45-.015-.903-.02-1.352-.015v-.801c.465.004.934 0 1.403-.012a.057.057 0 0 0 .023-.035c.227-.133.285-.316.18-.558a.5.5 0 0 0-.254-.184c-.45-.012-.903-.016-1.352-.012-.078-.984.317-1.71 1.184-2.172 1.09-.347 1.93-.035 2.527.934.176.39.242.805.203 1.238-.449-.004-.902 0-1.351.012-.29.113-.375.312-.254.598.05.062.11.109.18.144Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fefefe",
                fillOpacity: 1,
              }}
            />
            <use xlinkHref="#fx" mask="url(#fy)" />
            <path
              d="M48.957 24.078a.057.057 0 0 1-.023.035c-.47.012-.938.016-1.403.012l1.426-.047Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#aee5c1",
                fillOpacity: 1,
              }}
            />
            <path
              d="m50.02 24.078 1.425.047c-.468.004-.933 0-1.402-.012a.057.057 0 0 1-.023-.035Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#ade5c0",
                fillOpacity: 1,
              }}
            />
            <path
              d="M45.887 26.992a.46.46 0 0 1 .472.266c.036 1.488.735 2.52 2.09 3.097 1.14.34 2.172.141 3.094-.609.727-.664 1.086-1.492 1.074-2.488.11-.219.281-.293.52-.23a.488.488 0 0 1 .207.16c.062 1.53-.547 2.714-1.824 3.554a3.577 3.577 0 0 1-1.645.524v1.093c.555-.004 1.113 0 1.668.012.277.121.352.316.23.594a.464.464 0 0 1-.304.183c-1.336.016-2.672.016-4.012 0-.293-.117-.379-.324-.254-.62a.517.517 0 0 1 .23-.157c.555-.012 1.114-.016 1.669-.012v-1.093c-1.446-.168-2.497-.907-3.157-2.211a4.216 4.216 0 0 1-.336-1.82.557.557 0 0 1 .278-.243Zm0 0"
              style={{
                stroke: "none",
                fillRule: "evenodd",
                fill: "#fcfefd",
                fillOpacity: 1,
              }}
            />
          </svg>
        </div>
        <div
          className="form-container"
          style={{
            marginTop: "2rem",
          }}
        >
          <form
            onSubmit={onFormSubmit}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "3rem",
            }}
          >
            <input
              style={{ width: "80%" }}
              autoFocus
              ref={input}
              placeholder="Nome do canal na twitch..."
              alt="nome canal da twitch"
              required
              className="input"
            />
            <button
              style={{ width: "20%" }}
              type="submit"
              title="Escutar"
              className="submit"
            >
              Escutar
            </button>
          </form>
        </div>
        <div className="opinions">
          Feedback no{" "}
          <a
            href="https://www.tabnews.com.br/ytu/pitch-twitch-cast-suas-lives-da-twitch-em-podcast"
            target="_blank"
          >
            Tabnews.
          </a>
        </div>
        <div className="content" ref={player}>
          <div className={`player_container ${!channel && "deactive"}`}>
            <Image
              src={channel?.channel.image || "/profile_placeholder.svf"}
              alt={`Foto de perfil de ${channel?.channel.name || "undefined"}`}
              width={100}
              height={100}
            />
            <div>
              <p>
                {channel?.channel.name.charAt(0).toUpperCase() +
                  channel?.channel.name.slice(1) || "Carregando..."}
              </p>
              <audio controls id="audio" ref={audio} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 100,
  };
}
