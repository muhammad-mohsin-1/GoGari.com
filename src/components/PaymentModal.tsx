import { useState } from 'react';
import { X, CreditCard, Wallet, Banknote, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PaymentModalProps {
  amount: number;
  carName: string;
  onClose: () => void;
  onSuccess: () => void;
}

const pakistaniBanks = [
  'HBL - Habib Bank Limited',
  'UBL - United Bank Limited',
  'MCB - Muslim Commercial Bank',
  'Allied Bank Limited',
  'Bank Alfalah',
  'Meezan Bank',
  'Faysal Bank',
  'Standard Chartered Bank Pakistan',
  'JS Bank',
  'Askari Bank'
];

const pakistaniWallets = [
  'JazzCash',
  'Easypaisa',
  'SadaPay',
  'NayaPay',
  'Upaisa'
];

export default function PaymentModal({ amount, carName, onClose, onSuccess }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'bank' | 'wallet'>('cash');
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [walletNumber, setWalletNumber] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    if (cleaned.length !== 16 || !/^\d+$/.test(cleaned)) {
      return 'Card number must be 16 digits';
    }
    return '';
  };

  const validateCVV = (value: string) => {
    if (value.length !== 3 || !/^\d+$/.test(value)) {
      return 'CVV must be 3 digits';
    }
    return '';
  };

  const validateExpiry = (value: string) => {
    if (!/^\d{2}\/\d{2}$/.test(value)) {
      return 'Format: MM/YY';
    }
    return '';
  };

  const validateName = (value: string) => {
    if (!/^[a-zA-Z\s]+$/.test(value) || value.trim().length < 3) {
      return 'Name must contain only letters and be at least 3 characters';
    }
    return '';
  };

  const validatePhone = (value: string) => {
    if (!/^03\d{9}$/.test(value)) {
      return 'Phone number must start with 03 and be 11 digits';
    }
    return '';
  };

  const handleCardNumberChange = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    if (cleaned.length <= 16 && /^\d*$/.test(cleaned)) {
      const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
      setCardNumber(formatted);
      if (errors.cardNumber) {
        const error = validateCardNumber(value);
        setErrors(prev => ({ ...prev, cardNumber: error }));
      }
    }
  };

  const handleExpiryChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 4) {
      let formatted = cleaned;
      if (cleaned.length >= 2) {
        formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
      }
      setExpiryDate(formatted);
      if (errors.expiryDate) {
        const error = validateExpiry(formatted);
        setErrors(prev => ({ ...prev, expiryDate: error }));
      }
    }
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};

    if (paymentMethod === 'cash') {
      setShowSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
      return;
    }

    if (paymentMethod === 'bank') {
      if (!selectedBank) {
        newErrors.bank = 'Please select a bank';
      }
      const cardError = validateCardNumber(cardNumber);
      if (cardError) newErrors.cardNumber = cardError;
      
      const nameError = validateName(cardHolder);
      if (nameError) newErrors.cardHolder = nameError;
      
      const cvvError = validateCVV(cvv);
      if (cvvError) newErrors.cvv = cvvError;
      
      const expiryError = validateExpiry(expiryDate);
      if (expiryError) newErrors.expiryDate = expiryError;
    }

    if (paymentMethod === 'wallet') {
      if (!selectedWallet) {
        newErrors.wallet = 'Please select a wallet';
      }
      const phoneError = validatePhone(walletNumber);
      if (phoneError) newErrors.walletNumber = phoneError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setShowSuccess(true);
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Success Popup */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center z-10"
              >
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl text-gray-800 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600">Your booking has been confirmed</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Header */}
          <div className="border-b border-gray-200 p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-gray-800">Payment Details</h2>
              <p className="text-gray-600 mt-1">{carName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Amount */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-gray-600 mb-1">Total Amount</p>
              <p className="text-3xl text-blue-600">Rs {amount.toLocaleString()}</p>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-3">Payment Method</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'cash'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <Banknote className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-center">Cash on Arrival</p>
                </button>
                <button
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'bank'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-center">Bank Transfer</p>
                </button>
                <button
                  onClick={() => setPaymentMethod('wallet')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'wallet'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <Wallet className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <p className="text-center">Other Wallets</p>
                </button>
              </div>
            </div>

            {/* Cash on Arrival */}
            {paymentMethod === 'cash' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 rounded-lg p-4 mb-6"
              >
                <p className="text-gray-700">
                  Pay cash when the driver delivers the car to your location. Please keep the exact amount ready.
                </p>
              </motion.div>
            )}

            {/* Bank Transfer */}
            {paymentMethod === 'bank' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 mb-6"
              >
                <div>
                  <label className="block text-gray-700 mb-2">Select Bank</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => {
                      setSelectedBank(e.target.value);
                      setErrors(prev => ({ ...prev, bank: '' }));
                    }}
                    className={`w-full px-4 py-3 border ${errors.bank ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="">Choose a bank</option>
                    {pakistaniBanks.map((bank) => (
                      <option key={bank} value={bank}>{bank}</option>
                    ))}
                  </select>
                  {errors.bank && <p className="text-red-500 text-sm mt-1">{errors.bank}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => handleCardNumberChange(e.target.value)}
                    onBlur={() => setErrors(prev => ({ ...prev, cardNumber: validateCardNumber(cardNumber) }))}
                    placeholder="1234 5678 9012 3456"
                    className={`w-full px-4 py-3 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Card Holder Name</label>
                  <input
                    type="text"
                    value={cardHolder}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[a-zA-Z\s]*$/.test(value)) {
                        setCardHolder(value);
                      }
                    }}
                    onBlur={() => setErrors(prev => ({ ...prev, cardHolder: validateName(cardHolder) }))}
                    placeholder="Muhammad Mohsin"
                    className={`w-full px-4 py-3 border ${errors.cardHolder ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors.cardHolder && <p className="text-red-500 text-sm mt-1">{errors.cardHolder}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => handleExpiryChange(e.target.value)}
                      onBlur={() => setErrors(prev => ({ ...prev, expiryDate: validateExpiry(expiryDate) }))}
                      placeholder="MM/YY"
                      className={`w-full px-4 py-3 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 3 && /^\d*$/.test(value)) {
                          setCvv(value);
                        }
                      }}
                      onBlur={() => setErrors(prev => ({ ...prev, cvv: validateCVV(cvv) }))}
                      placeholder="123"
                      className={`w-full px-4 py-3 border ${errors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Wallet Payment */}
            {paymentMethod === 'wallet' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 mb-6"
              >
                <div>
                  <label className="block text-gray-700 mb-2">Select Wallet</label>
                  <select
                    value={selectedWallet}
                    onChange={(e) => {
                      setSelectedWallet(e.target.value);
                      setErrors(prev => ({ ...prev, wallet: '' }));
                    }}
                    className={`w-full px-4 py-3 border ${errors.wallet ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  >
                    <option value="">Choose a wallet</option>
                    {pakistaniWallets.map((wallet) => (
                      <option key={wallet} value={wallet}>{wallet}</option>
                    ))}
                  </select>
                  {errors.wallet && <p className="text-red-500 text-sm mt-1">{errors.wallet}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Mobile Number</label>
                  <input
                    type="text"
                    value={walletNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.length <= 11 && /^\d*$/.test(value)) {
                        setWalletNumber(value);
                      }
                    }}
                    onBlur={() => setErrors(prev => ({ ...prev, walletNumber: validatePhone(walletNumber) }))}
                    placeholder="03001234567"
                    className={`w-full px-4 py-3 border ${errors.walletNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                  {errors.walletNumber && <p className="text-red-500 text-sm mt-1">{errors.walletNumber}</p>}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
