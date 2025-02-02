import MainTestimonialCard from "./MainTestimonialCard";
const ScrollingColumn = ({ testimonials, duration = "10s", className = "" }) => {
  return (
    <div className={`flex flex-col animate-loop-scroll space-y-4 ${className}`} style={{ animationDuration: duration }}>
      {[...testimonials, ...testimonials].map((testimonial) => (
        <MainTestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default ScrollingColumn;
