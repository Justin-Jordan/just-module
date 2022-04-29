<?php

namespace Drupal\just_mod\Plugin\Layout\Footer;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbin bact to top",
 *   label = @Translation("Plumbing back to top"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/footer",
 *   template = "plumbing_back_to_top",
 *   library = "just_mod/plumbing_back_to_top",
 * )
 */
class PlumbingBackToTop extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
