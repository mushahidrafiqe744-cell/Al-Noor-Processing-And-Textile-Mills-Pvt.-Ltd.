import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import {
  Search,
  ChevronRight,
  Calculator,
  X
} from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { products, openQuoteModal, openLightbox } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductDetails, setSelectedProductDetails] = useState<Product | null>(null);

  const categories = [
    'All',
    'Processed Fabrics',
    'Dyed Fabrics',
    'Finished Fabrics',
    'Custom Textile Solutions'
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.weave.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.gsm.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#F6F5EF] text-[#123C38]">
      {/* 1. Page Banner */}
      <section className="bg-[#063F3A] text-white py-20 lg:py-28 relative overflow-hidden border-b border-[#063F3A]/20">
        <div className="absolute inset-0 textile-grid-dark opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A95A]">
              Woven & Processed Textiles
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4 leading-none">
              Fabric Product Catalogue
            </h1>
            <p className="text-sm sm:text-base text-[#F6F5EF]/80 leading-relaxed font-normal">
              Industrial workwear twills, crisp poplin shirting, luxury beddings, and custom engineered weaves manufactured with certified reactive & vat dyeing formulations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <div className="bg-white border-b border-primary/10 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs (Segmented controls - functional buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#063F3A] text-[#A7E85A] shadow-sm'
                    : 'bg-[#F6F5EF] text-[#123C38] hover:bg-[#F6F5EF]/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#123C38]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fabric, GSM, weave..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded bg-[#F6F5EF] border border-primary/10 text-xs text-[#123C38] focus:outline-none focus:border-[#C8A95A] focus:bg-white transition-all font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#123C38]/60 hover:text-[#063F3A]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8 text-xs text-[#123C38]/70 font-semibold">
          <span>Showing <strong className="text-[#063F3A] font-mono">{filteredProducts.length}</strong> fabric varieties</span>
          {selectedCategory !== 'All' && (
            <span className="text-[#C8A95A] font-bold">Category: {selectedCategory}</span>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded border border-primary/10 p-8 space-y-4">
            <p className="text-base font-bold text-[#123C38]/85">No fabrics matched your criteria.</p>
            <p className="text-xs text-[#123C38]/60">Try adjusting your category filter or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded bg-[#063F3A] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded border border-primary/10 hover:border-[#C8A95A] transition-all duration-300 overflow-hidden flex flex-col group shadow-sm hover:shadow-lg"
              >
                {/* Product Image Frame */}
                <div
                  className="relative h-48 overflow-hidden bg-[#F6F5EF] cursor-pointer"
                  onClick={() => openLightbox({ url: product.image, title: product.name, category: product.category })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#063F3A]/90 text-white text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-[#063F3A] group-hover:text-[#C8A95A] line-clamp-2 font-brand leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-[#123C38]/80 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Spec Summary Table */}
                    <div className="pt-2 border-t border-primary/5 space-y-1.5 text-xs text-[#123C38]/95">
                      <div className="flex justify-between py-0.5">
                        <span className="text-[#123C38]/60">Weight:</span>
                        <span className="font-semibold">{product.gsm}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-[#123C38]/60">Weave:</span>
                        <span className="font-semibold">{product.weave}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-[#123C38]/60">Width:</span>
                        <span className="font-semibold">{product.width}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-[#123C38]/60">Min Order:</span>
                        <span className="font-semibold text-[#063F3A]">{product.minOrder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProductDetails(product)}
                      className="w-1/2 py-2 rounded text-xs font-bold text-[#063F3A] bg-[#F6F5EF] hover:bg-[#F6F5EF]/80 transition-colors text-center cursor-pointer"
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() =>
                        openQuoteModal({
                          productType: product.name,
                          fabricSpecs: `${product.gsm}, ${product.weave}, ${product.width}, ${product.composition}`
                        })
                      }
                      className="w-1/2 py-2 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 transition-all text-center cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Product Detailed Specifications Modal */}
      {selectedProductDetails && (
        <div
          className="fixed inset-0 z-50 bg-[#063F3A]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProductDetails(null)}
        >
          <div
            className="bg-white rounded max-w-xl w-full p-6 shadow-2xl space-y-5 border border-primary/10"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-primary/10">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#C8A95A]">
                  {selectedProductDetails.category}
                </span>
                <h3 className="text-lg font-bold text-[#063F3A] font-brand">
                  {selectedProductDetails.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="text-[#123C38]/40 hover:text-[#063F3A] p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-[#123C38]/85 leading-relaxed">
                {selectedProductDetails.description}
              </p>

              <div className="bg-[#F6F5EF] p-4 rounded border border-primary/5 space-y-2.5">
                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Fabric Weave</span>
                    <span className="font-semibold text-[#063F3A]">{selectedProductDetails.weave}</span>
                  </div>
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Weight (GSM)</span>
                    <span className="font-semibold text-[#063F3A] font-mono">{selectedProductDetails.gsm}</span>
                  </div>
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Finished Width</span>
                    <span className="font-semibold text-[#063F3A]">{selectedProductDetails.width}</span>
                  </div>
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Composition</span>
                    <span className="font-semibold text-[#063F3A]">{selectedProductDetails.composition}</span>
                  </div>
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Finish Treatment</span>
                    <span className="font-semibold text-[#063F3A]">{selectedProductDetails.finishType}</span>
                  </div>
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Dyeing Method</span>
                    <span className="font-semibold text-[#063F3A]">{selectedProductDetails.dyeingMethod}</span>
                  </div>
                  <div>
                    <span className="text-[#123C38]/60 block text-[10px] uppercase font-bold tracking-wider">Min Production Order</span>
                    <span className="font-semibold text-[#C8A95A] font-mono">{selectedProductDetails.minOrder}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-primary/10">
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="px-4 py-2 rounded text-xs font-bold text-[#123C38]/60 hover:bg-[#F6F5EF]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const p = selectedProductDetails;
                  setSelectedProductDetails(null);
                  openQuoteModal({
                    productType: p.name,
                    fabricSpecs: `${p.gsm}, ${p.weave}, ${p.width}, ${p.composition}`
                  });
                }}
                className="px-5 py-2.5 rounded text-xs uppercase tracking-wider font-bold text-[#063F3A] bg-[#A7E85A] hover:bg-[#A7E85A]/90 shadow-md"
              >
                Request Quotation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
