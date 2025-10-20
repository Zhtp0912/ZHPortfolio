export default function ContactForm() {
    return (
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Contact Me</h2>
        <p className="mb-6 text-gray-600">Feel free to reach out for collaborations or just a friendly chat.</p>
  
        <form
          action="https://formsubmit.co/tp068635@mail.apu.edu.my"
          method="POST"
          className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg text-left space-y-6 border border-gray-100"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Message!" />
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
  
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
          </div>
  
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
          </div>
  
          <div>
            <label className="block mb-2 font-medium text-gray-700">Contact Number</label>
            <input type="tel" name="contact" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
          </div>
  
          <div>
            <label className="block mb-2 font-medium text-gray-700">Message</label>
            <textarea name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" />
          </div>
  
          <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  