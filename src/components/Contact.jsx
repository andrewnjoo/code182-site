import { AiOutlineMail } from 'react-icons/ai'
import { HeaderText } from './ui_components/HeaderText'

export function Contact() {
  return (
    <div className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <div>
            <HeaderText
                text="Contact Us"
            />
            <div className="mt-3">
              <p className="text-lg text-gray-500">
              We&lsquo;d love to hear from you!
              </p>
            </div>
            <div className="mt-9">
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <AiOutlineMail className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>
                    <a href="mailto:thecode182@gmail.com">Send email</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
