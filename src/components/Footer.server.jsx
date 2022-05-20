import {Link} from '@shopify/hydrogen';

/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({collection, product}) {
  return (
    <footer role="contentinfo">
      <div className="relative bg-red-300 border-t border-b border-black border-opacity-5">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Follow me</h2>
            <ul className="mt-8 space-y-4">
              <li className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <a
                  href="https://www.instagram.com/sparkcles/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  Instagram
                </a>
              </li>
              <li className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <a
                  href="https://www.facebook.com/sparkcles/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  Facebook
                </a>
              </li>
              <li className="text-sm font-medium text-gray-600 hover:text-gray-900">
                <a
                  href="https://twitter.com/sparkcles"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          {/* 
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Templates</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/home">Home</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to={`/products/${product?.handle}`}>Product</Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to={`/collections/${collection?.handle}`}>
                  Collection
                </Link>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <Link to="/404">404</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-md font-medium uppercase mb-4">Docs</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <a href="https://shopify.dev/custom-storefronts/hydrogen">
                  Hydrogen overview
                </a>
              </li>
              <li className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
                <a href="https://shopify.dev/custom-storefronts/hydrogen/reference">
                  Hydrogen reference
                </a>
              </li>
            </ul>
          </div>
          */}
        </div>
      </div>
      <div className="py-6 px-4 md:px-8 bg-gray-50">
        <p className="text-gray-600">© 2021 Sparkcles</p>
      </div>
    </footer>
  );
}
