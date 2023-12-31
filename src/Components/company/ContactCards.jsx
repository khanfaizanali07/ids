

const ContactCards = ({detail}) => {
  return (
    <div>
      <div className="card lg:w-[340px] md:w-70 sm:w-62 w-50  shadow-xl py-[60px] px-[20px] bg-[#f8f8f8]">
  <figure><img src={detail.icon} alt="Icon"/></figure>
  <div className={`card-body ${detail.style}`}>
    <h2 className="card-title justify-center">{detail.heading}</h2>
    <p className="text-center">{detail.text}</p>
  </div>
  </div>
    

  </div>
  )
}

export default ContactCards
