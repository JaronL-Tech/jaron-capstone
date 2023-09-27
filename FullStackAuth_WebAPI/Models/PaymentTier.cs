using System.ComponentModel.DataAnnotations;

namespace FullStackAuth_WebAPI.Models
{
    public class PaymentTier
    {
        [Key]
        public int ID { get; set; }
        public string TierName { get; set; }

        public int MonthlyCost { get; set; }
    }
}
