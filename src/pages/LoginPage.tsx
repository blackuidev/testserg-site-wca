import { Mail, Lock } from 'lucide-react';
import { AuroraBackground } from '@/components/lightswind/aurora-background';
import { Button } from '@/components/lightswind/button';
import { Input } from '@/components/lightswind/input';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <AuroraBackground>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="mt-2 text-gray-300">Sign in to continue to your account.</p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-indigo-500"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-10 bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-indigo-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-400">
            Not a member?{' '}
            <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
              Sign up now
            </a>
          </p>
          <div className="text-center">
            <Link to="/" className="text-sm text-gray-400 hover:text-gray-200">&larr; Back to store</Link>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default LoginPage;
