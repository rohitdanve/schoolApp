import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import gallery_1 from "../../assets/images/gallery/gallery-1.jpg";
import gallery_2 from "../../assets/images/gallery/gallery-2.jpg";
import gallery_3 from "../../assets/images/gallery/gallery-3.jpg";
import gallery_4 from "../../assets/images/gallery/gallery-4.jpg";
import gallery_5 from "../../assets/images/gallery/gallery-5.jpg";
import gallery_6 from "../../assets/images/gallery/gallery-6.jpg";

const Gallery = () => {
  return (
    <>
    
    <section>
      <div className="innerHeading-wrap">
        <Container>
          <h1>Gallery</h1>
        </Container>
      </div>
    </section>
         <section>
         <div className="gallery-wrap ">
           <Container>
             <Row>
        
               <div className="col-lg-12">
                 <div className="row">
                   <div className="col-lg-4 col-md-6">
                     <div className="galleryImg">
                       <img src={gallery_1} alt="" />
                       <div className="portfolio-overley">
                         <div className="content">
                           <a
                             href={gallery_1}
                             className="fancybox image-link"
                             data-fancybox="images"
                             title="Image Caption Here"
                           >
                             <i className="bi bi-zoom-in"></i>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-4 col-md-6">
                     <div className="galleryImg">
                       <img src={gallery_2} alt="" />
                       <div className="portfolio-overley">
                         <div className="content">
                           <a
                             href={gallery_2}
                             className="fancybox image-link"
                             data-fancybox="images"
                             title="Image Caption Here"
                           >
                             <i className="bi bi-zoom-in"></i>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-4 col-md-6">
                     <div className="galleryImg">
                       <img src={gallery_3} alt="" />
                       <div className="portfolio-overley">
                         <div className="content">
                           <a
                             href={gallery_3}
                             className="fancybox image-link"
                             data-fancybox="images"
                             title="Image Caption Here"
                           >
                             <i className="bi bi-zoom-in"></i>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-4 col-md-6">
                     <div className="galleryImg">
                       <img src={gallery_4} alt="" />
                       <div className="portfolio-overley">
                         <div className="content">
                           <a
                             href={gallery_4}
                             className="fancybox image-link"
                             data-fancybox="images"
                             title="Image Caption Here"
                           >
                             <i className="bi bi-zoom-in"></i>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-4 col-md-6">
                     <div className="galleryImg">
                       <img src={gallery_5} alt="" />
                       <div className="portfolio-overley">
                         <div className="content">
                           <a
                             href={gallery_5}
                             className="fancybox image-link"
                             data-fancybox="images"
                             title="Image Caption Here"
                           >
                             <i className="bi bi-zoom-in"></i>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-4 col-md-6">
                     <div className="galleryImg">
                       <img src={gallery_6} alt="" />
                       <div className="portfolio-overley">
                         <div className="content">
                           <a
                             href={gallery_6}
                             className="fancybox image-link"
                             data-fancybox="images"
                             title="Image Caption Here"
                           >
                             <i className="bi bi-zoom-in"></i>
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </Row>
           </Container>
         </div>
       </section>
    </>
  );
};

export default Gallery;
