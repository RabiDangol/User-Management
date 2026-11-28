import { Button, Label, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

const Dashprofile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const filePickerRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const handleCancel = (e) => {
    setImageFile(null);

    if (filePickerRef.current) {
      filePickerRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="max-w-3xl mx-auto p-3">
        {/* left side */}
        <div></div>
        {/* right side */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Profile Information
          </h2>
          <p className="text-gray-500 mb-6">
            Update your personal account information.
          </p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              ref={filePickerRef}
              onChange={handleImageChange}
              hidden
            />
            <div
              className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
              onClick={() => filePickerRef.current?.click()}
            >
              {/* <img
                // src={imageFileUrl || currentUser.profilePicture}
                src={currentUser?.profilePicture || ""}
                alt="user"
                className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
                onChange={handleImageChange}
              /> */}
              {imageFileUrl || currentUser?.profilePicture ? (
                <img
                  src={imageFileUrl || currentUser.profilePicture}
                  alt="User profile"
                  className="rounded-full w-full h-full object-cover border-8 border-gray-200"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div>
              <Label value="Your Name">Enter Your Name</Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                required
                value={currentUser?.username || ""}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Email">Enter Your Email</Label>
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                required
                value={currentUser?.email || ""}
              ></TextInput>
            </div>
            <div>
              <Label value="Your Address">Enter Your Address</Label>
              <TextInput
                type="text"
                placeholder="Address"
                id="address"
                required
              ></TextInput>
            </div>
            <div className="flex justify-end gap-3">
              <Button color="light" type="button" onClick={handleCancel}>
                Cancel
              </Button>
              <Button color="blue" type="submit">
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashprofile;
