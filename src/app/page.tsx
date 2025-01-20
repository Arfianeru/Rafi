import HomeBanner from '@/components/ui/HomeBanner';
import Container from '@/components/ui/Container';
import Image from "next/image";

export default function Home() {
  return (
    <Container className="py-10">
      <HomeBanner />
    </Container>
    );
}
