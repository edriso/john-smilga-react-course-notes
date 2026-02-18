import TopicPage from '../../components/TopicPage';
import CodeBlock from '../../components/CodeBlock';

const FormActions = () => {
  return (
    <TopicPage
      title="Form Actions"
      subtitle="Handle form submissions with React Router's action function — submit data without managing state."
    >
      <h2>What are Actions?</h2>
      <p>
        Actions are like loaders but for <strong>mutations</strong> (POST, PUT,
        DELETE). When a form is submitted, the action function runs
        automatically. You use React Router's <code>Form</code> component
        instead of a regular <code>&lt;form&gt;</code>.
      </p>

      <h2>Setup</h2>
      <CodeBlock>{`import { Form, redirect } from 'react-router-dom';

// The action function
const newsletterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  // { email: 'john@gmail.com' }

  // Submit to API, redirect on success
  await fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return redirect('/success');
};

// Attach to route
{
  path: 'newsletter',
  element: <Newsletter />,
  action: newsletterAction,
}`}</CodeBlock>

      <h2>The Form Component</h2>
      <CodeBlock>{`import { Form } from 'react-router-dom';

const Newsletter = () => {
  return (
    <Form method="POST">
      <input type="email" name="email" required />
      <button type="submit">Subscribe</button>
    </Form>
  );
};`}</CodeBlock>
      <p>
        When submitted, React Router calls the <code>action</code> function
        and passes the form data automatically.
      </p>

      <h2>Loading State During Submission</h2>
      <CodeBlock>{`import { Form, useNavigation } from 'react-router-dom';

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="POST">
      <input type="email" name="email" required />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>
    </Form>
  );
};`}</CodeBlock>

      <h2>Action with Toast Notifications</h2>
      <CodeBlock>{`import { toast } from 'react-toastify';

const newsletterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post('/api/newsletter', data);
    toast.success('Subscribed successfully!');
    return redirect('/');
  } catch (error) {
    toast.error('Something went wrong');
    return null;
  }
};`}</CodeBlock>

      <div className="quick-ref">
        <h3>Quick Reference</h3>
        <ul>
          <li>Use <code>&lt;Form method="POST"&gt;</code> (from react-router-dom)</li>
          <li>Action receives <code>{'{ request }'}</code> with form data</li>
          <li><code>request.formData()</code> → <code>Object.fromEntries()</code></li>
          <li><code>redirect('/path')</code> — navigate after success</li>
          <li><code>useNavigation().state === 'submitting'</code> — loading state</li>
        </ul>
      </div>
    </TopicPage>
  );
};

export default FormActions;
