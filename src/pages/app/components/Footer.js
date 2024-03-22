export default function Footer() {
  return (
    <div className="md:container mx-auto px-2 md:px-16 py-5">
      <div className="grid grid-cols-3 gap-2">
        <div className="text-sm">
          <div>Developed by</div>
          <div>
            <span className="font-medium">
              <a href="/">Nomena RANOTRONARISON</a>
            </span>
          </div>
        </div>
        <div className="text-sm text-center">
          Built with <span className="font-medium">NextJS</span> and deployed on <span className="font-medium">Versel</span>
        </div>
        <div className="text-sm text-slate-800 flex justify-end">
          <a href="linkedin.com/in/nomena-ranotronarison-dev" target="_blank">
            <svg class="w-8 h-8 text-gray-800 hover:text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </a>
          <a href="mailto:arivonyran@gmail.com" target="_blank">
            <svg class="w-8 h-8 text-gray-800 hover:text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>

          </a>
        </div>
      </div>
    </div>
  )
}