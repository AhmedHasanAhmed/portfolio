import { contactInfo } from "../data/portfolioData";
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { iconRegistry } from "./CustomIcons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">
          Have a project in mind or just want to say hello? Feel free to reach
          out using the form below or through my social channels.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="card p-8">
            <form className="space-y-6">
              <Input label="Name" type="text" placeholder="Your name" />
              <Input
                label="Email"
                type="email"
                placeholder="your.email@example.com"
              />
              <Input
                label="Subject"
                type="text"
                placeholder="How can I help you?"
              />
              <Textarea label="Message" placeholder="Your message here..." />
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <InfoRow
                  icon={<MailIcon className="h-6 w-6" />}
                  label="Email"
                  value={contactInfo.email}
                />
                <InfoRow
                  icon={<PhoneIcon className="h-6 w-6" />}
                  label="Phone"
                  value={contactInfo.phone}
                />
                <InfoRow
                  icon={<LocationMarkerIcon className="h-6 w-6" />}
                  label="Location"
                  value={contactInfo.location}
                />
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-6">
                {contactInfo.socialLinks.map((social) => {
                  const IconComponent = iconRegistry[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {IconComponent && <IconComponent className="h-8 w-8" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Let's Work Together
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I'm currently open to freelance projects and full-time
                opportunities. Whether you have a question or just want to
                connect, I'll do my best to get back to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== SMALL COMPONENTS ===== */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <textarea
      {...props}
      rows="5"
      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>
);

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 text-indigo-600 dark:text-indigo-400">
    {icon}
    <div>
      <p className="text-gray-700 dark:text-gray-300">{label}</p>
      <p className="font-medium text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);
