import './global.css';
export const metadata = {
  title: 'Home',
  description: 'Generated by create-nx-workspace',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
