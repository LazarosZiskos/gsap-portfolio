import AnimatedHeader from "../components/AnimatedHeader";

const Services = () => {
  const text =
    "I build secure, high-performance full-stack applications with smooth UX to drive growth, not headaches";
  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeader
        text={text}
        subTitle="Behind the scene, Beyond the screen"
        title="Services"
        textColor={"text-white"}
        withScrollTrigger={true}
      />
    </section>
  );
};

export default Services;
