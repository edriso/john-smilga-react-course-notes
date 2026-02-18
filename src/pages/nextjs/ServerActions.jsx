import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const ServerActions = () => {
  return (
    <TopicPage
      title="Server Actions"
      subtitle="Run server-side code directly from your components — mutations, form handling, and database operations."
    >
      <h2>What are Server Actions?</h2>
      <p>
        Server Actions are async functions that run on the server. You can
        call them from your components to handle form submissions, database
        writes, and other mutations — no API route needed.
      </p>

      <h2>Creating a Server Action</h2>
      <CodeBlock language="typescript">{`// Option 1: Inline in a Server Component
const Page = () => {
  const createUser = async (formData: FormData) => {
    'use server';
    const name = formData.get('name') as string;
    await db.user.create({ data: { name } });
  };

  return (
    <form action={createUser}>
      <input name="name" type="text" />
      <button type="submit">Create</button>
    </form>
  );
};`}</CodeBlock>
      <CodeBlock language="typescript">{`// Option 2: Separate file (can be used in Client Components)
// actions.ts
'use server';

export const createUser = async (formData: FormData) => {
  const name = formData.get('name') as string;
  await db.user.create({ data: { name } });
  revalidatePath('/users');
};`}</CodeBlock>

      <h2>Using in Forms</h2>
      <p>
        Pass the action to the form's <code>action</code> prop:
      </p>
      <CodeBlock language="typescript">{`import { createUser } from './actions';

const CreateUserForm = () => {
  return (
    <form action={createUser}>
      <input name="name" type="text" required />
      <input name="email" type="email" required />
      <button type="submit">Create User</button>
    </form>
  );
};`}</CodeBlock>

      <h2>Revalidating Data</h2>
      <p>
        After mutating data, tell Next.js to refetch:
      </p>
      <CodeBlock language="typescript">{`'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createUser = async (formData: FormData) => {
  const name = formData.get('name') as string;
  await db.user.create({ data: { name } });
  revalidatePath('/users');  // refresh this page's data
  redirect('/users');        // navigate to the page
};`}</CodeBlock>

      <h2>Passing Arguments with bind()</h2>
      <CodeBlock language="typescript">{`// When you need to pass extra data (like an ID)
const deleteAction = async (id: string) => {
  'use server';
  await db.user.delete({ where: { id } });
  revalidatePath('/users');
};

const DeleteButton = ({ id }: { id: string }) => {
  const boundAction = deleteAction.bind(null, id);
  return (
    <form action={boundAction}>
      <button type="submit">Delete</button>
    </form>
  );
};`}</CodeBlock>

      <h2>Loading State with useFormStatus</h2>
      <CodeBlock language="typescript">{`'use client';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
};

// Use inside the form (must be a child)
<form action={createUser}>
  <input name="name" />
  <SubmitButton />
</form>`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li><code>'use server'</code> — marks a function as a server action</li>
          <li><code>&lt;form action={'{serverAction}'}&gt;</code> — submit calls the action</li>
          <li><code>revalidatePath('/path')</code> — refresh cached data</li>
          <li><code>redirect('/path')</code> — navigate after action</li>
          <li><code>action.bind(null, arg)</code> — pass extra arguments</li>
          <li><code>useFormStatus()</code> — get pending state in submit button</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default ServerActions;
