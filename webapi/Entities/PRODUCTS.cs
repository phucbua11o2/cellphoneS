namespace webapi.Entities
{
    public class PRODUCTS
    {
        public int? ID { get; set; }
        public string? NAME { get; set; }
        public string? DESCRIPTION { get; set; }
        public string? URL { get; set; }
        public string? IMAGE { get; set; }
        public decimal? PRICE_OLD { get; set; }
        public decimal? PRICE_NEW { get; set; }
        public decimal? PRICE_UP { get; set; }
        public int? DISCOUNT { get; set; }
        public int? STAR { get; set; }
        public double? FAVORITE { get; set; }
        public int? ID_CATEGORIES { get; set; }
    }
}
