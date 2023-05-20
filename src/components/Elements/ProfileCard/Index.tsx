import Bio from "./Bio";
import Footer from "./Footer";
import Header from "./Header";
import MenuButton from "./MenuButton";

export default function ProfileCard() {
  return (
    <>
      <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>

      {/* <!-- Snippet --> */}
      <section className="flex justify-center antialiased bg-gray-100 text-gray-600 min-h-screen">
        <div className="h-full">
          {/* <!-- Card --> */}
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="flex flex-col h-full">
              {/* <!-- Card top --> */}
              <div className="flex-grow p-5">
                <div className="flex justify-between items-start">
                  {/* <!-- Image + name --> */}
                  <Header />
                  {/* <!-- Menu button --> */}
                  <MenuButton />
                </div>
                {/* // <!-- Bio --> */}
                <Bio />
              </div>
              {/* <!-- Card footer --> */}
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
