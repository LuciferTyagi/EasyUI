const MainTestimonialCard = ({ testimonial }) => {
    return (
      <div className="relative w-full max-w-[400px] h-auto bg-white rounded-2xl p-4 pb-8 text-center shadow border-[1px] border-zinc-500/10">
        <img
          src={testimonial.image}
          alt="user"
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 size-20 object-cover rounded-full border-2 border-white"
        />
        <span className="mt-10 mb-2 inline-block font-bold text-black/60">
          {testimonial.name}
        </span>
        <p className="text-zinc-700 text-sm">{testimonial.description}</p>
      </div>
    );
  };
  
  export default MainTestimonialCard;
  