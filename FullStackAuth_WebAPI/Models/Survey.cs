using System.ComponentModel.DataAnnotations;

namespace FullStackAuth_WebAPI.Models
{
    public class Survey
    {
        [Key]

        public int Id { get; set; }
        public string Likes { get; set; }

        public string DisLikes { get; set; }
    }

}
