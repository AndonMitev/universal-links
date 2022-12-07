import QRCode from "react-qr-code";

const Test = () => {
  return <div>
    <p>Hello Mobile app</p>
    <QRCode value="https://1b1.art/claim?authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uTmFtZSI6IjRFVkUgRXhjZXB0aW9uIiwidG9rZW5JZCI6OTM5NiwiaWF0IjoxNjUxNTYyNTgxLCJleHAiOjE3MTIwNDI1ODF9.jH0zwN4MMSi9qKhddgJpgk02sanTzwoB9_hffY7RC6E&collectionName=4EVE Exception&itemId=9396" size={150} />
  </div>
}

export default Test