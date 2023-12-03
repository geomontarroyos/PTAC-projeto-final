import React from "react";
import { Link } from "react-router-dom";

const videoUrls = [
  "https://www.youtube.com/embed/To4SWGZkEPk?si=4-DgnO_iqo5Y8fTq",
  "https://www.youtube.com/embed/RnyPNdBWwVw?si=mnKYk8-g6TOt5WH1",
  "https://www.youtube.com/embed/m4_9TFeMfJE?si=qgG5SUAx5tTBvKOl",
  "https://www.youtube.com/embed/mRD0-GxqHVo?si=mHqp-o4nov49LH18",
  "https://www.youtube.com/embed/Uq9gPaIzbe8?si=DpZylojBlxk-JdnM",
  "https://www.youtube.com/embed/Cjp6RVrOOW0?si=izg9plBHNHRDEqnD",
  "https://www.youtube.com/embed/Fp8msa5uYsc?si=_2JBzpeN2ZcY76_u",
  "https://www.youtube.com/embed/TO-_3tck2tg?si=jmpblFA1PR2WtNkL",
  "https://www.youtube.com/embed/W2MpGCL8-9o?si=irao3-FoEelMr8Is",
];

const Home = () => {
  return (
    <div className="container-fluid bg-cinza">
      <div className="row">
        <div className="col-md-3 sidebar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destaque">Vídeos em destaque</Link></li>
            <li><Link to="/registro">Cadastrar vídeo</Link></li>
          </ul>
        </div>

        <div className="col-md-9 content">
          <h1 className="text-start">
            Galeria de Músicas{" "}
            <span className="px-2 fs-4 fw-normal bg-danger-subtle">
            </span>
          </h1>

          <h4 className="fw-bold pb-0 mb-0">Acompanhe os vídeos adicionados❤️👍</h4>
          <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-3">
              {videoUrls.map((videoUrl, index) => (
                <div key={index} className="col my-2">
                  <div className="bg-danger ratio ratio-16x9">
                    <iframe src={videoUrl} title={`YouTube video ${index}`} allowFullScreen />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
