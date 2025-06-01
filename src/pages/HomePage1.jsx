import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-blue-600 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">Welcome</h1>
    </div>
  );
}

export default HomePage;
