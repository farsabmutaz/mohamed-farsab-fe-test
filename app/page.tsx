// Import the redirect function
import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to /marketplace
  redirect('/marketplace');
}
