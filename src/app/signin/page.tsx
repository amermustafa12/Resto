import Link from "next/link";

export const metadata = {
  title: "Sign In | Resto",
  description: "Sign in to manage your reservations.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-brand-dark transition-colors duration-300 px-4 pt-20">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-gray-600 dark:text-gray-400">Sign in to your Resto account.</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <input type="checkbox" className="rounded border-gray-300 text-brand-accent focus:ring-brand-accent" />
              Remember me
            </label>
            <a href="#" className="text-brand-accent font-medium hover:underline">Forgot password?</a>
          </div>

          <button type="button" className="w-full bg-brand-accent text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition-colors">
            Sign In
          </button>
        </form>

    <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
  Don&apos;t have an account?{" "}
  <Link href="/signup" className="text-brand-accent font-medium hover:underline">
    Sign up
  </Link>
</p>

      </div>
    </div>
  );
}