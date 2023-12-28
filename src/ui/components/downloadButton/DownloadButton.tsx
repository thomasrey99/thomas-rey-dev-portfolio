"use client"
import style from "@/ui/styles/components/downloadButton/downloadButton.module.scss"

const DownloadButton = () => {

    const downloadCV = () => {
        const url = '/CV-THOMAS REY.docx'; 
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '/CV-THOMAS REY.docx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div className={style.buttonCont}>
        <button onClick={downloadCV} className={style.downloadButton}>Download CV</button>
    </div>
  )
}

export default DownloadButton