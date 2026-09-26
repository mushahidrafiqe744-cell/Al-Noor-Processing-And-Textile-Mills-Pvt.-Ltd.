import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import {
  Search,
  Filter,
  CheckCircle2,
  ChevronRight,
  Calculator,
  SlidersHorizontal,
  X,
  FileSpreadsheet
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
    <div className="w-full bg-[#FAFBFC]">
      {/* 1. Page Banner */}
      <section className="bg-[#070D1E] text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 textile-grid-dark opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Woven & Processed Textiles
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-brand mt-2 mb-4">
              Fabric Product Catalog
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Industrial workwear twills, crisp poplin shirting, luxury beddings, and custom engineered weaves manufactured with certified reactive & vat dyeing formulations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B192C] text-[#D4AF37] shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search fabric, GSM, weave..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8 text-xs text-slate-500 font-medium">
          <span>Showing <strong className="text-slate-900 tabular-nums">{filteredProducts.length}</strong> fabric varieties</span>
          {selectedCategory !== 'All' && (
            <span className="text-[#B8860B] font-semibold">Category: {selectedCategory}</span>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <p className="text-base font-semibold text-slate-700">No fabrics matched your criteria.</p>
            <p className="text-xs text-slate-500">Try adjusting your category filter or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#0B192C] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#D4AF37] transition-all duration-300 overflow-hidden flex flex-col group shadow-xs hover:shadow-lg"
              >
                {/* Product Image Frame */}
                <div
                  className="relative h-48 overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => openLightbox({ url: product.image, title: product.name, category: product.category })}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B192C]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded border border-[#D4AF37]/30">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0B192C] line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Spec Summary Table */}
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-xs">
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-400">Weight:</span>
                        <span className="font-semibold text-slate-800">{product.gsm}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-400">Weave:</span>
                        <span className="font-semibold text-slate-800">{product.weave}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-400">Width:</span>
                        <span className="font-semibold text-slate-800">{product.width}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-slate-400">Min Order:</span>
                        <span className="font-semibold text-[#B8860B]">{product.minOrder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProductDetails(product)}
                      className="w-1/2 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-center cursor-pointer"
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
                      className="w-1/2 py-2 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 active:scale-[0.98] transition-all text-center cursor-pointer shadow-xs"
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
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProductDetails(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-5 border border-slate-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8860B]">
                  {selectedProductDetails.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-brand">
                  {selectedProductDetails.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="text-slate-400 hover:text-slate-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <p className="text-slate-600 leading-relaxed">
                {selectedProductDetails.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5">
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Fabric Weave</span>
                    <span className="font-semibold text-slate-900">{selectedProductDetails.weave}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Weight (GSM)</span>
                    <span className="font-semibold text-slate-900">{selectedProductDetails.gsm}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Finished Width</span>
                    <span className="font-semibold text-slate-900">{selectedProductDetails.width}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Composition</span>
                    <span className="font-semibold text-slate-900">{selectedProductDetails.composition}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Finish Treatment</span>
                    <span className="font-semibold text-slate-900">{selectedProductDetails.finishType}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Dyeing Method</span>
                    <span className="font-semibold text-slate-900">{selectedProductDetails.dyeingMethod}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Minimum Production Order</span>
                    <span className="font-semibold text-[#B8860B]">{selectedProductDetails.minOrder}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                onClick={() => setSelectedProductDetails(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
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
                className="px-6 py-2 rounded-lg text-xs uppercase tracking-wider font-bold text-slate-950 gold-gradient-bg hover:brightness-110 shadow-md"
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
