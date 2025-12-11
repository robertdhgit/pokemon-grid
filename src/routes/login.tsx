import { createFileRoute, redirect } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../components';

type LoginForm = {
  username: string;
  password: string;
};

export const Route = createFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    localStorage.setItem('user', data.username);

    redirect({
      to: '/pokemon',
    });
  };

  return (
    <section aria-labelledby="login-heading">
      <h2 id="login-heading">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <Input
          placeholder="Enter your username"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <p style={{ color: 'red', marginTop: 8 }}>{errors.username.message}</p>}
        <Input
          type="password"
          placeholder="Enter your password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            validate: (value) =>
              /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
          })}
        />
        {errors.password && <p style={{ color: 'red', marginTop: 8 }}>{errors.password.message}</p>}
        <Button type="submit">Login</Button>
      </form>
    </section>
  );
}
