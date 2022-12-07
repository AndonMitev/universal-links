import QRCode from "react-qr-code";

const Test = () => {
  return <div>
    <p>Hello Mobile app</p>
    <QRCode value='https://benevolent-druid-e55bba.netlify.app' size={150} />
  </div>
}

export default Test