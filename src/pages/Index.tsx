import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { AppPreview } from "@/components/AppPreview";
import { SignupForm } from "@/components/SignupForm";
import { WhyDifferent } from "@/components/WhyDifferent";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero onCTAClick={scrollToSignup} />
      <Benefits />
      <AppPreview />
      <WhyDifferent />
      <SignupForm />
      <FinalCTA onCTAClick={scrollToSignup} />
      <Footer />
    </div>
  );
};

export default Index;
