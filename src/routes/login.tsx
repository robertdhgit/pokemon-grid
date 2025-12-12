import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { Button, Input, FormErrorMessage } from '../components';

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
  const router = useRouter();

  const onSubmit = (data: LoginForm) => {
    localStorage.setItem('user', data.username);

    router.navigate({
      to: '/pokemon',
    });
  };

  return (
    <section aria-labelledby="login-heading">
      <h1 id="login-heading">Login to Pokemon</h1>
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
        {errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
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
