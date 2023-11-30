

const ContactCards = ({detail}) => {
  return (
    <div>
      <div className="card lg:w-70 md:w-70 sm:w-60 w-50 bg-base-100 shadow-xl py-[60px] px-[20px]">
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
