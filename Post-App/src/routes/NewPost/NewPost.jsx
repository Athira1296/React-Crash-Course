import classes from './NewPost.module.css';
import Modal from '../../components/Modal/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {

  return (
    <Modal>
      {/* Form from react router dom is used, name property is added for
       the text areas to handle form submissions */}

      <Form method='post' className={classes.form}> 
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required/>
        </p>
        <p className={classes.actions}>
          <Link  to='..'>Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>

    </Modal>
  );
}

export default NewPost;

export async function action(data) {
  const {request} = data;
  const formData = await request.formData(); 

  // const responce = await fetch('http://localhost:80 .... to analyze the response but we are not going to do it here
  
  const postData = {
    author: formData.get('author'),
    body: formData.get('body')
  };

  await fetch('http://localhost:8080/posts',{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json'
    }
  });

  return redirect('/');

}