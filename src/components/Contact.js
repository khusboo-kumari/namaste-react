const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl m-8  flex ">This is Contact Page </h1>
      <form>
        <input type="text" className=" p-4 m-8  font-semibold " placeholder="name" />
        <input type="text" className=" p-4 m-8  font-bold " placeholder="message" />
        <button className="p-2 bg-slate-600 rounded-lg">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
