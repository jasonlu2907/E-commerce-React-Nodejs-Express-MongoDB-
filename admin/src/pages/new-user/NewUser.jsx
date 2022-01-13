import './newUser.scss';

const newUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUser-title">New User</h1>
      <form className="newUser-form">
        <div className="newUser-form--item">
          <label htmlFor="username" className="newUser-form--label">Username</label>
          <input type="text" className="newUser-form--input" id="username" placeholder="john" />
        </div>
        <div className="newUser-form--item">
          <label htmlFor="name" className="newUser-form--label">Full Name</label>
          <input type="text" className="newUser-form--input" id="name" placeholder="John Smith" />
        </div>
        <div className="newUser-form--item">
          <label htmlFor="email" className="newUser-form--label">Email</label>
          <input type="email" className="newUser-form--input" id="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUser-form--item">
          <label htmlFor="pass" className="newUser-form--label">Password</label>
          <input type="password" className="newUser-form--input" id="pass" placeholder="password" />
        </div>
        <div className="newUser-form--item">
          <label htmlFor="phone" className="newUser-form--label">Phone</label>
          <input type="text" className="newUser-form--input" id="phone" placeholder="+1 123 456 78" />
        </div>
        <div className="newUser-form--item">
          <label htmlFor="address" className="newUser-form--label">Address</label>
          <input type="text" className="newUser-form--input" id="address" placeholder="New York | USA" />
        </div>
        <div className="newUser-form--item">
          <label className="newUser-form--label">Gender</label>
          <div className="newUser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUser-form--item">
          <label className="newUser-form--label">Active</label>
          <select className="newUser-select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUser-btn">Create</button>
      </form>
    </div>
  )
}

export default newUser
